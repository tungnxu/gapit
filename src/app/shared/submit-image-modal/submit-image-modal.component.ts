import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StudentApi } from 'src/app/api/student.api';
import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Student, User } from 'src/app/types/models';
import html2canvas from 'html2canvas';

import domtoimage from 'dom-to-image';
import { ResultApi } from 'src/app/api/result.api';

@Component({
  selector: 'app-submit-image-modal',
  templateUrl: './submit-image-modal.component.html',
  styleUrls: ['./submit-image-modal.component.scss']
})
export class SubmitImageModalComponent implements OnInit {
  public event: EventEmitter<any> = new EventEmitter();
  submitImageForm: FormGroup
  loading = false
  submitted = false
  returnUrl: string
  fileUrl: string
  error = ''
  success = ''
  x = 0
  y = 0
  timeoutHandler;
  z = 100


  frames: any[] = [{
    id: 1,
    src: 'assets/img/frame/frame1.png'
  },
  {
    id: 2,
    src: 'assets/img/frame/frame2.png'
  },
  {
    id: 3,
    src: 'assets/img/frame/frame3.png'
  },
  {
    id: 4,
    src: 'assets/img/frame/frame4.png'
  }]

  currentFrame: any = {}

  user$: Observable<User>

  constructor(public bsModalRef: BsModalRef,
    private formBuilder: FormBuilder,
    private resultApi: ResultApi,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.currentFrame = this.frames[0]

    this.submitImageForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      description: [''],
      file: ['', Validators.required],
      frameborder: [this.currentFrame.id]
    })

    this.user$ = this.authService.currentUser
  }

  get f() { return this.submitImageForm.controls }


  onFileUrl(event) {
    this.fileUrl = event
    console.log(this.fileUrl)

  }
  onSubmit() {

    this.submitted = true

    if (this.submitImageForm.invalid) {
      return
    }
    this.loading = true
    const el = document.getElementById('target');
    el.style.display = "block";
    domtoimage.toBlob(document.getElementById('target'), { quality: 0.95 })
      .then((blob1) => {
        setTimeout(() => {
          domtoimage.toBlob(document.getElementById('target'), { quality: 0.95 })
            .then((blob) => {
              const fileImage = new File([blob], "new-filename.png")
              const form = new FormData()
              const fileName = (fileImage as any)['name'] || 'unknownfile'
              const fileSize = (fileImage as any)['size']

              if (fileSize > 5000000) {
                this.error = 'File tải vượt quá dung lượng 5MB'
                this.loading = false
                return
              }

              form.append('file', fileImage, fileName)
              form.append('name', this.f.name.value)
              form.append('phone', this.f.phone.value)
              form.append('description', this.f.description.value)

              const next = (res: any) => {
                el.style.display = "none";

                this.loading = false
                this.success = 'Bài dự thi đã được gửi thành công. Mã tác phẩm: ' + res?.id
              }

              const error = (error) => {
                el.style.display = "none";

                this.error = error?.error?.Message
                this.loading = false
              }
              this.loading = true
              this.resultApi.uploadExam(form).subscribe(next, error)
            });
        });
      }, 1000);

  }

  changeFrame(e) {
    this.currentFrame = this.frames.find(x => x.id == e.target.id)
    this.x = 0
    this.y = 0
  }


  public mouseup() {
    if (this.timeoutHandler) {
      clearInterval(this.timeoutHandler);
      // this.x = 0;
      this.timeoutHandler = null;
    }
  }

  public mousedownright() {
    this.timeoutHandler = setInterval(() => {
      this.x += 10;
    }, 100);
  }

  public mousedownleft() {
    this.timeoutHandler = setInterval(() => {
      this.x -= 10;
    }, 100);
  }

  public mousedowndown() {
    this.timeoutHandler = setInterval(() => {
      this.y += 10;
    }, 100);
  }

  public mousedowntop() {
    this.timeoutHandler = setInterval(() => {
      this.y -= 10;
    }, 100);
  }

  public render() {

    const el = document.getElementById('target');
    el.style.display = "block";

    domtoimage.toJpeg(document.getElementById('target'), { quality: 0.95 })
      .then(function (dataUrl) {
        // el.style.display = "none";
        // const a = document.createElement('a');
        // a.href = dataUrl;
        // a.download = 'filename';
        // a.click();
        setTimeout(() => {
          domtoimage.toJpeg(document.getElementById('target'), { quality: 0.95 })
            .then(function (dataUrl1) {
              const a = document.createElement('a');
              a.href = dataUrl1;
              a.download = 'filename';
              a.click();
              el.style.display = "none";
            })
        }, 1000);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });


  }

}

