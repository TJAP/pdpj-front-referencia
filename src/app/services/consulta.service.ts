import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";
import { EnvService } from "./env.service";

@Injectable({
    providedIn: 'root'
})
export class ConsultaService {

    constructor (private http: HttpClient, private env: EnvService) {}

    listar(filtro: string): Observable<any[]>  {
        return this.http.get<any[]>(`${this.env.apiUrl}/consulta?filtro=${filtro}`).pipe(shareReplay());
    }

}