import { Component, signal, WritableSignal } from '@angular/core';
import { QuoteCardComponent } from '../quote-card/quote-card.component';
import { QuoteSlateInterface } from 'src/app/interfaces/quote-slate.interface';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-saved-quotes',
  templateUrl: './saved-quotes.component.html',
  styleUrl: './saved-quotes.component.scss',
  standalone: true,
  imports: [QuoteCardComponent, MatButtonModule, MatIconModule],
})
export class SavedQuotesComponent {
  quotesList: WritableSignal<QuoteSlateInterface[]> = signal([]);
  
  constructor(private router: Router) { }
  
  ngOnInit() {
    this.getSavedQuotes();
  }

  getSavedQuotes() {
    try {
      const data = localStorage.getItem('savedQuotes');
      this.quotesList.set(JSON.parse(data || '[]') as QuoteSlateInterface[]);
    } catch (e) { }
  }

  unsaveQuote(quote: QuoteSlateInterface) {
    const data = localStorage.getItem('savedQuotes');
    let savedQuotes: QuoteSlateInterface[] = JSON.parse(data || '[]');
    savedQuotes = savedQuotes.filter(q => q.id !== quote.id);
    localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
    this.getSavedQuotes();
  }

  goToQuotes() {
    this.router.navigate(['/home']);
  }
}
