import { Directive, Input, forwardRef } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { ErrorStateMatcher } from './error-state-matcher.class'

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[showError]',
  providers: [{
    provide: ErrorStateMatcher,
    useExisting: forwardRef(() => ShowErrorDirective)
  }]
})
export class ShowErrorDirective extends ErrorStateMatcher {
  isShowError$ = new BehaviorSubject(false)

  @Input() set showError(value: boolean) {
    this.isShowError$.next(value)
  }
}
