import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from '@services/keycloak.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor( private securityService: KeycloakService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if(!this.securityService.kc || !this.securityService.kc.authenticated) {
            return next.handle(request);
        }

        request = request.clone({
            setHeaders: {
                'Authorization': 'Bearer '+ this.securityService.kc.token,
                'Content-Type': 'application/json'
            }
        });

        return next.handle(request);
    }
}
