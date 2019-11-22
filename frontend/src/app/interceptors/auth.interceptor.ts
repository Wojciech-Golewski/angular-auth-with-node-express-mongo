import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req, next) {
        return next.handle();
    }

}