import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHeaders, HttpHandler } from '@angular/common/http';
import { tempAuthToken } from 'src/app/config/constants';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        req = req.clone({
            setHeaders: {
                Authorization: `Bearer ${tempAuthToken}`
            }
        });
        return next.handle(req);
    }

}
