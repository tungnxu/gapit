import { Component, OnInit, forwardRef, Input } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
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
  file: any
  fileName: string
  inputId: string
  private onChangeFn: Function

  constructor(
  ) { }

  ngOnInit() {
    this.inputId = `file-input-${v4()}`
    this.label = this.label || 'Upload file'
  }

  onFileChanged($event: any) {
    const input = (event.target as HTMLInputElement)
    debugger
    this.file = input.files[0] as File
    const formData = new FormData();
    formData.append('file',  this.file,  this.file.name);
    // input.value = '' comment tạm
    this.fileName = this.file.name
    if (isFunction(this.onChangeFn)) {
      this.onChangeFn(this.file)
    }
  }

  remove() {
    this.file = undefined
    this.fileName = undefined
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
