import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  // !! NOT IN USE
  // constructor(private spinner: NgxSpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // ? Original request
    // console.log('request object', request);
    // return next.handle(request);

    // ? Cloned request
    const authToken = 'JwtAuthToken';
    const authReq = request.clone({
      headers: request.headers.set('Authorization', authToken),
      // setHeaders: { Authorization: authToken },
    });
    console.log('authReq', authReq);
    return next.handle(authReq);

    // ? Loader implementation
    // this.spinner.show();
    // return next.handle(request).pipe(finalize(() => this.spinner.hide()));
  }
}
