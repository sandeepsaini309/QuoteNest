import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss'],
})
export class QuoteCardComponent {
  @Input() quoteData!: any;
  constructor() {}
  ngOnInit() {}
  ngOnDestroy() {}
}
