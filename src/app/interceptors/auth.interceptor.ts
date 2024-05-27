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
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // const authToken = 'JwtAuthToken';
    // const authReq = request.clone({
    //   withCredentials: true,
    //   headers: request.headers.set('Authorization', authToken),
    //   // setHeaders: { Authorization: authToken },
    // });
    // console.log('authReq', authReq);
    // return next.handle(authReq);

    console.log('request object', request);
    return next.handle(request);
  }
}
