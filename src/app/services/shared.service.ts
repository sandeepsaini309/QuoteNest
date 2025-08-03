import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(
    private snackBar: MatSnackBar,
    private clipBoard: Clipboard
  ) { }

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

      const alreadySaved: any = localStorage.getItem('savedQuotes');
      const existingData = alreadySaved ? JSON.parse(alreadySaved) : [];

      // Prevent duplicates by id
      const matchedQuotes = existingData.findIndex((item: any) => item.id === data.id);
      if (matchedQuotes > -1) {
        this.openSnackBar('Quote already saved');
        return;
      }

      existingData.push(data);
      localStorage.setItem('savedQuotes', JSON.stringify(existingData));
      this.openSnackBar('Quote saved');
    } catch (e) {
      console.error('saveToLocalStorage e:', e);
      this.openSnackBar('Something went wrong!');
    }
  }
}
