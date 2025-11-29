import { Component, input } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';

import { CardThemeDirective } from '../../directives/card-theme.directive';
import { QuoteSlateInterface } from 'src/app/interfaces/quote-slate.interface';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatTooltipModule, MatRippleModule, CardThemeDirective],
})
export class QuoteCardComponent {
  quoteData = input.required<QuoteSlateInterface>();
  constructor(
    private sharedService: SharedService,
    private dialog: MatDialog
  ) { }

  public copyToClipboard(data: QuoteSlateInterface) {
    this.sharedService.copyToClipboard(data);
  }

  public toggleSave(data: QuoteSlateInterface) {
    if (this.isQuoteSaved(data)) {
      this.openUnsaveConfirmDialog(data);
    } else {
      this.sharedService.saveToLocalStorage(data);
    }
  }

  private openUnsaveConfirmDialog(data: QuoteSlateInterface) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Are you sure you want to unsave this quote?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.sharedService.removeQuote(data.id);
      }
    });
  }

  public isQuoteSaved(quote: QuoteSlateInterface): boolean {
    return this.sharedService.isQuoteSaved(quote.id);
  }
}
