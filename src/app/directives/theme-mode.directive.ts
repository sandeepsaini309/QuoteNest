import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appThemeMode]',
})
export class ThemeModeDirective {
  constructor(private eleRef: ElementRef) {
    eleRef.nativeElement.style.background = '#181a1b';
    eleRef.nativeElement.style.color = '#d1cdc7';
  }
}
