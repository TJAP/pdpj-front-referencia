import { Component, OnInit } from '@angular/core';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-tela-consulta',
  templateUrl: './tela-consulta.component.html',
  styleUrls: ['./tela-consulta.component.scss'],
})
export class TelaConsultaComponent implements OnInit {

    lista: any[];
    filtro: string;

    constructor(protected consultaService: ConsultaService) { }

    ngOnInit() {
        this.limpar();
    }

    pesquisar() {
        this.consultaService.listar(this.filtro).subscribe(resultado=> {
            this.lista = resultado;
        });
    }

    limpar() {
        this.filtro='';
    }
}
