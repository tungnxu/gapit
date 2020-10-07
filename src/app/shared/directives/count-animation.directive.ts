import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[countAnimation]'
})

export class CountAnimationDirective {
  @Input() startNum = 0
  timestamp = 0
  @Input() duration = 0.3 // second
  @Input('endNumber') endNumber: number

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  private incNbrRec(i, endNbr, elt) {
    this.elementRef.nativeElement.innerText = i.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    if (i < endNbr) {
      setTimeout(() => {
        this.incNbrRec(i + Number((this.timestamp / 100).toFixed(0)), endNbr, elt);
      }, 10 * this.duration);
    } else if (i > endNbr) {
      setTimeout(() => {
        this.incNbrRec(i - Number((this.timestamp / 100).toFixed(0)), endNbr, elt);
      }, 10 * this.duration);
    }
  }

  ngOnChanges(changes) {
    this.timestamp = Math.abs(this.endNumber - this.startNum)
    if (changes.endNumber) {
      this.incNbrRec(this.startNum, this.endNumber, this.elementRef.nativeElement)
      this.startNum = this.endNumber
    }
  }

}
