import { Component } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';
import { QuoteCardComponent } from '../quote-card/quote-card.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [QuoteCardComponent, MatButtonModule],
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
