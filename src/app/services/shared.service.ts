import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';
import { QuoteInterface } from '../interfaces/quote.interface';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private snackBar: MatSnackBar, private clipBoard: Clipboard) {}

  public openSnackBar(msg?: any, action?: string) {
    this.snackBar.open(msg || 'Done', action || 'Ok', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    });
  }

  public copyToClipboard(data: any) {
    this.clipBoard.copy(`${data.content} - ${data.author}`);
    this.openSnackBar('Quote copied');
  }

  public saveToLocalStorage(data: QuoteInterface) {
    try {
      let alreadySaved: any = localStorage.getItem('savedQuotes');
      console.log('data', data);
      console.log('alreadySaved', alreadySaved);
      if (alreadySaved?.length) {
        const existingData: any[] = JSON.parse(alreadySaved);

        // ? check if quote exist or not
        const matchedQuotes = existingData.findIndex(
          (el) => el._id === data._id
        );
        console.log('matchedQuotes', matchedQuotes);
        if (matchedQuotes > -1) {
          this.openSnackBar('Quote already saved');
          return;
        }

        existingData.push(data);
        localStorage.setItem('savedQuotes', JSON.stringify(existingData));
        this.openSnackBar('Quote saved');
      } else {
        localStorage.setItem('savedQuotes', JSON.stringify([data]));
      }
    } catch (e) {
      console.error('saveToLocalStorage e:', e);
      this.openSnackBar('Something went wrong!');
    }
  }
}
