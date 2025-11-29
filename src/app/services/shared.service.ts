import { Injectable, signal, WritableSignal } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';
import { QuoteSlateInterface } from '../interfaces/quote-slate.interface';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  public savedQuotes: WritableSignal<QuoteSlateInterface[]> = signal([]);

  constructor(
    private snackBar: MatSnackBar,
    private clipBoard: Clipboard
  ) {
    this.loadSavedQuotes();
  }

  private loadSavedQuotes() {
    try {
      const alreadySaved = localStorage.getItem('savedQuotes');
      if (alreadySaved) {
        this.savedQuotes.set(JSON.parse(alreadySaved));
      }
    } catch (e) {
      console.error('Error loading saved quotes', e);
    }
  }

  public openSnackBar(msg?: any, action?: string) {
    this.snackBar.open(msg || 'Done', action || 'Ok', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }

  public copyToClipboard(data: any) {
    this.clipBoard.copy(`${data.quote} - ${data.author}`);
    this.openSnackBar('Quote copied');
  }

  public saveToLocalStorage(data: any) {
    try {
      // Unwrap if data has a 'source' property (defensive fix for nested objects)
      if (data?.source) {
        data = data.source;
      }

      const currentSaved = this.savedQuotes();

      // Prevent duplicates by id
      const matchedQuotes = currentSaved.findIndex((item: any) => item.id === data.id);
      if (matchedQuotes > -1) {
        this.openSnackBar('Quote already saved');
        return;
      }

      const updatedSaved = [...currentSaved, data];
      this.savedQuotes.set(updatedSaved);
      localStorage.setItem('savedQuotes', JSON.stringify(updatedSaved));
      this.openSnackBar('Quote saved');
    } catch (e) {
      console.error('saveToLocalStorage e:', e);
      this.openSnackBar('Something went wrong!');
    }
  }

  public removeQuote(quoteId: number) {
    try {
      const currentSaved = this.savedQuotes();
      const updatedSaved = currentSaved.filter(q => q.id !== quoteId);
      this.savedQuotes.set(updatedSaved);
      localStorage.setItem('savedQuotes', JSON.stringify(updatedSaved));
      this.openSnackBar('Quote removed');
    } catch (e) {
      console.error('removeQuote e:', e);
      this.openSnackBar('Error removing quote');
    }
  }

  public isQuoteSaved(quoteId: number): boolean {
    return this.savedQuotes().some(q => q.id === quoteId);
  }
}
