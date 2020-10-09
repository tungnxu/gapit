import { Directive, OnInit, Input, Optional, Host, Renderer2, ElementRef } from '@angular/core'
import { AbstractControl, FormGroupDirective } from '@angular/forms'
import { Observable, combineLatest, of as observableOf, merge } from 'rxjs'
import { mapTo, map } from 'rxjs/operators'
import { ShowErrorDirective } from './show-error.directive'
import { isUndefined } from 'lodash'

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[hasErrorControl]'
})
export class HasErrorControlDirective implements OnInit {
  path: string[]
  error$: Observable<any>
  @Input() errorClassName = 'has-danger'
  // tslint:disable-next-line:no-input-rename
  @Input('hasErrorControl') private control: AbstractControl

  constructor(
    @Optional() @Host() private formGroup: FormGroupDirective,
    @Optional() @Host() private showErrorDirective: ShowErrorDirective,
    private renderer: Renderer2,
    private elementRef: ElementRef,
  ) {
  }

  ngOnInit(): void {
    this.getControl()
    const isShow$ = this.showErrorDirective ? this.showErrorDirective.isShowError$ : observableOf(undefined)
    const controlError$ =  merge(observableOf(undefined), this.control.statusChanges)
      .pipe(map(() => this.control.errors))
    let isSubmitted$ = observableOf(false)

    if (this.formGroup) {
      isSubmitted$ = merge(
        isSubmitted$,
        this.formGroup.ngSubmit.pipe(mapTo(true)))
    }

    const reducer = ([isShow, isSubmitted, ce]) => {
      const show = isUndefined(isShow) ? isSubmitted : isShow
      if (!show) {
        return
      }
      return {
        controlError: ce,
        backendError: undefined
      }
    }

    this.error$ = combineLatest([isShow$, isSubmitted$, controlError$]).pipe(map(reducer))
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

  private getControl() {
    if (!this.control) {
      console.warn('No valid control found')
      return
    }
  }
}
