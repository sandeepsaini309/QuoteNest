import { Component, Input } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';

import { CardThemeDirective } from '../../directives/card-theme.directive';
import { QuoteSlateInterface } from 'src/app/interfaces/quote-slate.interface';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatRippleModule, CardThemeDirective],
})
export class QuoteCardComponent {
  @Input() quoteData!: QuoteSlateInterface;
  constructor(private sharedService: SharedService) { }

  public copyToClipboard(data: QuoteSlateInterface) {
    this.sharedService.copyToClipboard(data);
  }

  public saveToLocalStorage(data: QuoteSlateInterface) {
    this.sharedService.saveToLocalStorage(data);
  }

  public isQuoteSaved(quote: QuoteSlateInterface): boolean {
    const saved = localStorage.getItem('savedQuotes');
    if (!saved) return false;
    const savedQuotes: QuoteSlateInterface[] = JSON.parse(saved);
    return savedQuotes.some(q => q.id === quote.id);
  }
}
