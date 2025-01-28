import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AvisoService } from '@services/aviso.service';
import { SpinnerService } from '@services/spinner.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private aviso: AvisoService, private spinner: SpinnerService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((errorResponse: HttpErrorResponse) => {

                this.spinner.hide();

                let errorMessage: string = "";

                switch (errorResponse.status) {
                    case 0:
                        errorMessage = 'Erro ao se conectar ao servidor.';
                        break;
                    case 400:
                        errorMessage = 'Erro de validação.';
                        break;
                    case 401:
                        errorMessage = 'Você não forneceu suas credenciais ao acessar um recurso protegido ou elas são inválidas.';
                        break;
                    case 403:
                        errorMessage = 'Você não possui permissão.';
                        break;
                    case 404:
                        errorMessage = 'Recurso não encontrado.';
                        break;
                    case 500:
                        errorMessage = 'Erro interno do servidor.';
                        break;
                    case 502:
                        errorMessage = 'O caminho até a API de serviços parece estar incorreto. Verifique as configurações da aplicação.';
                        break;
                    case 503:
                        errorMessage = 'A API de serviços está indisponível.';
                        break;
                    default:
                        errorMessage = 'Ocorreu um erro inesperado.';
                }

                this.aviso.putError((errorMessage ? errorMessage+' Mensagem do servidor: ' : '') 
                    + this.getErrorDetails(errorResponse));

                console.error(errorResponse);
                return throwError(errorResponse);
            })
        );
    }

    private getErrorDetails(errorResponse: HttpErrorResponse) {
        if (errorResponse.error && errorResponse.error.messages) {
            return errorResponse.error.messages;
        }
        else {
            return errorResponse.message;
        }
    }
}
