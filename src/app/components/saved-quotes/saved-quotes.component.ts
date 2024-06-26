import { Component } from '@angular/core';

@Component({
  selector: 'app-saved-quotes',
  // standalone: true,
  // imports: [],
  templateUrl: './saved-quotes.component.html',
  styleUrl: './saved-quotes.component.scss',
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
