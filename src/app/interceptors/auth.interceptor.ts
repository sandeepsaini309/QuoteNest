import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  // const authToken = 'JwtAuthToken';
  // const authReq = request.clone({
  //   headers: request.headers.set('Authorization', authToken),
  // });
  // console.log('authReq', authReq);
  // return next(authReq);
  return next(request);
};
