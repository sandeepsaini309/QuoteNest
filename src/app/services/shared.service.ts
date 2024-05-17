import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Clipboard } from '@angular/cdk/clipboard';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private snackBar: MatSnackBar, private clipBoard: Clipboard) {}

  openSnackBar(msg?: any, action?: string) {
    this.snackBar.open(msg || 'Done', action || 'Ok', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

  copyToClipboard(data: any) {
    this.clipBoard.copy(`${data.content} - ${data.author}`);
    this.openSnackBar('Quote copied');
  }
}
