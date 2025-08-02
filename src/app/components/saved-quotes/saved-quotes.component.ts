import { Component } from '@angular/core';
import { QuoteCardComponent } from '../quote-card/quote-card.component';

@Component({
  selector: 'app-saved-quotes',
  templateUrl: './saved-quotes.component.html',
  styleUrl: './saved-quotes.component.scss',
  standalone: true,
  imports: [QuoteCardComponent],
})
export class SavedQuotesComponent {
  quotesData: any[] = [];
  constructor() {}
  ngOnInit() {
    this.getSavedQuotes();
  }

  getSavedQuotes() {
    try {
      const data = localStorage.getItem('savedQuotes');
      if (data) {
        this.quotesData = JSON.parse(data);
      } else {
        this.quotesData = [];
      }
    } catch (e) {}
  }
}
