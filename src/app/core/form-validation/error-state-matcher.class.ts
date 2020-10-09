import { FormGroupDirective } from '@angular/forms'
import { Observable } from 'rxjs'
import { mapTo } from 'rxjs/operators'

export interface IErrorStateMatcher {
  isShowError$: Observable<boolean>
}

export abstract class ErrorStateMatcher implements IErrorStateMatcher {
  abstract isShowError$: Observable<boolean>
}

export class DefaultErrorMatcher extends ErrorStateMatcher {
  constructor(formDirective: FormGroupDirective) {
    super()
    this.isShowError$ = formDirective.ngSubmit.pipe(mapTo(true))
  }

  isShowError$: Observable<boolean>
}
