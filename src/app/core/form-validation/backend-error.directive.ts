import { Directive, Input, forwardRef } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { BackendErrorGetter } from './backend-error-getter.class'

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[backendError]',
  providers: [{
    provide: BackendErrorGetter,
    useExisting: forwardRef(() => BackendErrorDirective)
  }]
})
export class BackendErrorDirective extends BackendErrorGetter {
  error$ = new BehaviorSubject(undefined)

  @Input('backendError') set backendError(value: any) {
    this.error$.next(value)
  }
}
