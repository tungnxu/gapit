import { Component, OnInit, Host, Input, Optional } from '@angular/core'
import { HasErrorDirective } from '../has-error.directive'
import { HasErrorControlDirective } from '../has-error-control.directive'

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[errorMessage]',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  backendError: Array<string>
  controlError: { [key: string]: any }
  @Input() hideBackendError = false

  constructor(
    @Optional() @Host() private hasErrorDirective: HasErrorDirective,
    @Optional() @Host() private hasErrorControlDirective: HasErrorControlDirective,
  ) { }

  ngOnInit() {
    const errorHandler = err => {
      if (!err) {
        this.controlError = {}
        this.backendError = undefined
        return
      }

      this.controlError = err.controlError
      this.backendError = err.backendError
    }
    if (this.hasErrorDirective) {
      this.hasErrorDirective.error$.subscribe(err => {
        errorHandler(err)
      })
    } else if (this.hasErrorControlDirective) {
      this.hasErrorControlDirective.error$.subscribe(err => {
        errorHandler(err)
      })
    }
  }
}
