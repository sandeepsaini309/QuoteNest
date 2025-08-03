import { Component } from '@angular/core';
import { QuoteCardComponent } from '../quote-card/quote-card.component';
import { MatButtonModule } from '@angular/material/button';
import { ApiService } from 'src/app/services/api.service';
import { QuoteSlateInterface } from 'src/app/interfaces/quote-slate.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [QuoteCardComponent, MatButtonModule],
})
export class HomeComponent {
  quoteData!: QuoteSlateInterface;
  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.getQuoteSlateRandomQuote();
  }

  public async getQuoteSlateRandomQuote() {
    const getRandomQuote = await this.apiService.getQuoteSlateRandomQuote();
    if (getRandomQuote) {
      this.quoteData = getRandomQuote;
    }
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
