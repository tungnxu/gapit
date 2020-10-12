import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core'

@Directive({
  selector: '[countAnimation]',
  exportAs:'countAnimation'
})

export class CountAnimationDirective {
  @Input() startNum = 0
  timestamp = 0
  @Input() duration = 0.3 // second
  endNumber: number

  timeout

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  private incNbrRec(i, endNbr, elt) {
    this.elementRef.nativeElement.innerText = Number(i).toLocaleString('en-GB')
    if (i < endNbr) {
      this.timeout = setTimeout(() => {
        this.incNbrRec(i + Number((this.timestamp / 100).toFixed(0)), endNbr, elt)
      }, 10 * this.duration)
    } else if (i > endNbr) {
      this.timeout = setTimeout(() => {
        this.incNbrRec(i - Number((this.timestamp / 100).toFixed(0)), endNbr, elt)
      }, 10 * this.duration)
    }
  }

  changeNumber(num){
    clearTimeout(this.timeout)
    this.endNumber = num
    this.timestamp = Math.abs(this.endNumber - this.startNum)
    if (num) {
      this.incNbrRec(this.startNum, this.endNumber, this.elementRef.nativeElement)
      this.startNum = this.endNumber
    }
  }

  // ngOnChanges(changes) {
  //   this.timestamp = Math.abs(this.endNumber - this.startNum)
  //   if (changes.endNumber) {
  //     this.incNbrRec(this.startNum, this.endNumber, this.elementRef.nativeElement)
  //     this.startNum = this.endNumber
  //   }
  // }

}
