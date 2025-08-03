import { Component } from '@angular/core';
import { QuoteCardComponent } from '../quote-card/quote-card.component';
import { QuoteSlateInterface } from 'src/app/interfaces/quote-slate.interface';

@Component({
  selector: 'app-saved-quotes',
  templateUrl: './saved-quotes.component.html',
  styleUrl: './saved-quotes.component.scss',
  standalone: true,
  imports: [QuoteCardComponent],
})
export class SavedQuotesComponent {
  quotesList: QuoteSlateInterface[] = [];
  constructor() { }
  ngOnInit() {
    this.getSavedQuotes();
  }

  getSavedQuotes() {
    try {
      const data = localStorage.getItem('savedQuotes');
      this.quotesList = JSON.parse(data || '[]') as QuoteSlateInterface[];
    } catch (e) { }
  }

  unsaveQuote(quote: QuoteSlateInterface) {
    const data = localStorage.getItem('savedQuotes');
    let savedQuotes: QuoteSlateInterface[] = JSON.parse(data || '[]');
    savedQuotes = savedQuotes.filter(q => q.id !== quote.id);
    localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
    this.getSavedQuotes();
  }
}
