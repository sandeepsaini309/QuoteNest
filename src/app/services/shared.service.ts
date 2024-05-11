import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(msg?: any, action?: string) {
    this.snackBar.open(msg || 'Done', action || 'Ok', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
