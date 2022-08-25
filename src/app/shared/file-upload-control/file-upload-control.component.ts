import { Component, OnInit, forwardRef, Input, Output, EventEmitter } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import { DomSanitizer } from '@angular/platform-browser'
import { isFunction } from 'lodash'
import { v4 } from 'uuid'

@Component({
  selector: 'file-upload-control',
  templateUrl: './file-upload-control.component.html',
  styleUrls: ['./file-upload-control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileUploadControlComponent),
      multi: true,
    }
  ]
})
export class FileUploadControlComponent implements OnInit, ControlValueAccessor {
  @Input() label: string
  @Output() onFileUrl = new EventEmitter<string>()
  file: any
  fileName: string
  imageSrc: any
  inputId: string
  private onChangeFn: Function

  constructor(private _sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.inputId = `file-input-${v4()}`
    this.label = this.label || 'Upload file'
  }

  onFileChanged($event: any) {
    const input = (event.target as HTMLInputElement)
    this.file = input.files[0] as File
    const formData = new FormData();
    formData.append('file',  this.file,  this.file.name);
    // input.value = '' comment tạm
    this.fileName = this.file.name
    this.imageSrc = this._sanitizer.bypassSecurityTrustResourceUrl( URL.createObjectURL(this.file));
    if (isFunction(this.onChangeFn)) {
      this.onChangeFn(this.file)
      this.onFileUrl.emit(URL.createObjectURL(this.file))
    }
  }


  remove() {
    this.file = undefined
    this.fileName = undefined
    this.imageSrc = undefined
    if (isFunction(this.onChangeFn)) {
      this.onChangeFn(this.file)
    }
  }

  writeValue(fileUrl: string) {
    if (!fileUrl) {
      this.fileName = undefined
      return
    }

    if (this.fileName) {
      return
    }
    const fileName = this.getFileNameFromUrl(fileUrl)
    this.fileName = fileName
    this.imageSrc = fileUrl;
  }

  getFileNameFromUrl = (url: string) => {
    return url.split('/').pop().split('#')[0].split('?')[0]
  }

  registerOnChange(fn) {
    this.onChangeFn = fn
  }

  registerOnTouched(fn) {
  }

}
