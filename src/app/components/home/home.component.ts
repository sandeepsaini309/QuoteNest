import { Component } from '@angular/core';
import { QuotesService } from 'src/app/services/quotes.service';

@Component({
    selector: 'app-home',
    // standalone: true,
    // imports: [QuoteCardComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: false
})
export class HomeComponent {
  public quoteObj: any;
  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.getRandomQuote();
  }

  public async getRandomQuote() {
    const getRandomQuoteData = await this.quotesService.getRandomQuote();
    console.log('getRandomQuoteData', getRandomQuoteData);
    if (getRandomQuoteData) this.quoteObj = getRandomQuoteData;
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
