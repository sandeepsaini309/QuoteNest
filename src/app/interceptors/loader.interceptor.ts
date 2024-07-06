import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, finalize, throwError } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const spinner = inject(NgxSpinnerService);
  spinner.show();
  return next(req).pipe(
    // ! runs when api call finished
    finalize(() => {
      spinner.hide();
    }),

    // ! runs when api call Gets a error
    catchError((err: any) => {
      spinner.hide();
      if (err instanceof HttpErrorResponse) {
        console.error('http error', err);
      } else {
        console.error('non http error', err);
      }
      return throwError(() => err);
    })
  );
};
