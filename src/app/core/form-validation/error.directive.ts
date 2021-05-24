import { Directive, TemplateRef, ViewContainerRef, DoCheck, Host, Input, EmbeddedViewRef } from '@angular/core'
import { ErrorMessageComponent } from './error-message/error-message.component'

export class ErrorDirectiveContext {
  $implicit: any
}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ifError]'
})
export class ErrorDirective implements DoCheck {
  // tslint:disable-next-line:no-input-rename
  @Input('ifError') error: string
  private created: boolean
  private view: EmbeddedViewRef<ErrorDirectiveContext>

  constructor(
    @Host() private host: ErrorMessageComponent,
    private templateRef: TemplateRef<ErrorDirectiveContext>,
    private viewContainerRef: ViewContainerRef
  ) {
  }

  ngDoCheck() {
    const error = this.host.controlError && this.host.controlError[this.error]
    if (error) {
      this.create(error)
      return
    }

    this.destroy()
  }

  private create(error) {
    if (this.created) {
      this.view.context.$implicit = error
      return
    }
    this.view = this.viewContainerRef.createEmbeddedView(this.templateRef, {
      $implicit: error
    })
    this.created = true
  }

  private destroy() {
    if (!this.created) {
      return
    }
    this.created = false
    this.viewContainerRef.clear()
  }
}

