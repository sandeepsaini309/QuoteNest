import { Component, Input } from '@angular/core';
import { QuoteInterface } from 'src/app/interfaces/quote.interface';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss'],
})
export class QuoteCardComponent {
  @Input() quoteData!: QuoteInterface;
  constructor() {}
  ngOnInit() {}
  ngOnDestroy() {}
}
