import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private router: Router) {}

    ngOnInit() {
        this.handlePwa();
        this.redirectRotaInicial();
    }

    private handlePwa() {
        // Se sua aplicação é publicada em servidor que suporta HTTPS e deseja que utilize recursos PWA 
        //(adicionar à tela inicial/instalação) ative esta variável. 
        //Mais detalhes em: https://developers.google.com/web/progressive-web-apps
        const estaAplicacaoSuportaHttpsEmProducao = true;
        const location = window.location;
        if (!(location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname === '')) {
            // if is not in https
            if (location.protocol !== 'https:' && estaAplicacaoSuportaHttpsEmProducao) {
            // redirect to https (pwa requirement)
            location.assign('https:' + location.href.substring(location.protocol.length));
            }
        }
    }

    private redirectRotaInicial() {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd && event.url === '/') {
                this.router.navigateByUrl('/tela-consulta');
            }
        });
    }

}
