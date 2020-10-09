import { Directive, OnInit, Input, SkipSelf, Host, Optional, Renderer2, ElementRef } from '@angular/core'
import { ControlContainer, FormGroupDirective, FormGroupName, FormGroup, AbstractControl } from '@angular/forms'
import { Observable, of, combineLatest, merge } from 'rxjs'
import { map } from 'rxjs/operators'
import { BackendError } from 'src/app/types/models'
import { BackendErrorGetter, DefaultBackendErrorGetter } from './backend-error-getter.class'
import { ErrorStateMatcher, DefaultErrorMatcher } from './error-state-matcher.class'

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[hasError]',
  providers: []
})
export class HasErrorDirective implements OnInit {
  path: string[]
  control: AbstractControl
  formDirective: FormGroupDirective
  formGroup: FormGroup
  error$: Observable<any>
  // tslint:disable-next-line:no-input-rename
  @Input('hasError') controlPath: string
  @Input() errorClassName = 'has-danger'

  constructor(
    @Host() @SkipSelf() private controlContainer: ControlContainer,
    @Optional() private backendErrorGetter: BackendErrorGetter,
    @Optional() private errorStateMatcher: ErrorStateMatcher,
    private renderer: Renderer2,
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void {
    this.findFormDirective()
    this.findControl()
    this.errorStateMatcher = this.errorStateMatcher || new DefaultErrorMatcher(this.formDirective)
    this.backendErrorGetter = this.backendErrorGetter || new DefaultBackendErrorGetter()
    this.subscribe()
  }

  private subscribe() {
    const controlError$ = merge(of(undefined), this.formDirective.statusChanges)
      .pipe(map(_ => this.control && this.control.errors))

    const reducer = ([isShow, be, ce]) => {
      if (!isShow) {
        return
      }

      return {
        controlError: ce,
        backendError: be
      }
    }

    this.error$ = combineLatest([
      this.errorStateMatcher.isShowError$,
      this.backendErrorGetter.error$.pipe(map(this.mapBackendError)),
      controlError$
    ]).pipe(map(reducer))
    this.error$.subscribe(this.setClass.bind(this))
  }

  private setClass(error: any) {
    const isSet = error && (error.controlError || error.backendError)
    if (isSet) {
      this.renderer.addClass(this.elementRef.nativeElement, this.errorClassName)
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, this.errorClassName)
    }
  }

  private findFormDirective() {
    if (this.controlContainer instanceof FormGroupName) {
      this.formGroup = this.controlContainer.control
      this.formDirective = this.controlContainer.formDirective as FormGroupDirective
    } else if (this.controlContainer instanceof FormGroupDirective) {
      this.formGroup = this.controlContainer.form
      this.formDirective = this.controlContainer
    }
  }

  private findControl() {
    if (!this.controlPath) {
      this.control = this.formGroup
    } else {
      this.path = this.controlPath.split('.')
      this.control = this.formGroup.get(this.path)
    }

    if (!this.control) {
      console.warn(this.controlPath, 'is not a valid control path')
      return
    }
  }

  private mapBackendError = (err: BackendError) => {
    if (!err || !err.errors) {
      return
    }
    const getError = (propName: string, error: BackendError) => {
      const upperPropName = propName.replace(/^\w/, c => c.toUpperCase())
      const temp = error.errors[propName] || error.errors[upperPropName]
      return error && error.errors && (error.errors[propName] || error.errors[upperPropName])
    }
    return this.controlPath ? getError(this.controlPath, err) : undefined
  }
}
