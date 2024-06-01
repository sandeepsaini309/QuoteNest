import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardTheme]',
})
export class CardThemeDirective {
  constructor(private eleRef: ElementRef, private render: Renderer2) {
    this.setBackdropStyles();
  }

  private setBackdropStyles() {
    // ? Glassmorphism effect
    this.render.setStyle(
      this.eleRef.nativeElement,
      'background-color',
      'rgba(17, 25, 40, 0.75)'
    );
    this.render.setStyle(this.eleRef.nativeElement, 'color', '#d1cdc7');
    this.render.setStyle(
      this.eleRef.nativeElement,
      'backdrop-filter',
      'blur(16px) saturate(180%)'
    );
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.render.setStyle(
      this.eleRef.nativeElement,
      'box-shadow',
      '2px 2px 10px 5px rgba(17, 25, 40, 0.75)'
    );
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.render.setStyle(this.eleRef.nativeElement, 'box-shadow', 'none');
  }
}
