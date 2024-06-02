import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { QuotesService } from 'src/app/services/quotes.service';
import { QuoteCardComponent } from '../quote-card/quote-card.component';

@Component({
  selector: 'app-home',
  // standalone: true,
  // imports: [QuoteCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public quoteObj: any;
  constructor(
    private quotesService: QuotesService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getRandomQuote();
  }

  public async getRandomQuote() {
    this.spinner.show();
    const getRandomQuoteData = await this.quotesService.getRandomQuote();
    this.spinner.hide();
    console.log('getRandomQuoteData', getRandomQuoteData);
    if (getRandomQuoteData) this.quoteObj = getRandomQuoteData;
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
