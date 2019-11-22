import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req, next) {
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWJqZWN0IjoiNWRkNTg2ODZiYjE0NzkzMjM0MTJlYjFhIn0.48NxWpCF3I9XR3kzCMonvdBiopONtjwwHE20K0K1aQM')
        })
        return next.handle(authRequest);
    }

}