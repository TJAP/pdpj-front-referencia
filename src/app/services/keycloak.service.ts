import * as Keycloak from 'keycloak-js';
import { Injectable } from '@angular/core';
import { EnvService } from './env.service';
import { SpinnerService } from './spinner.service';
import { AvisoService } from './aviso.service';
import { UserInfo } from '../models/user-info.model';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

    public kc: Keycloak.KeycloakInstance;
    private userInfo: UserInfo = new UserInfo();

    constructor(
        private env: EnvService, 
        private spinner: SpinnerService,
        private aviso: AvisoService) {
    }

    init(): Promise<void> {
        return new Promise((resolve, reject) => {

            this.spinner.show();
            console.log(this.env);

            this.kc = Keycloak({
                url: this.env.ssoUrl,
                realm: this.env.realm,
                clientId: this.env.clientId
            });

            this.kc.init({
                onLoad: 'login-required'
            })
            .then(() => {
                this.kc.loadUserProfile().then(()=> {
                    this.userInfo.authenticated = true;
                    this.userInfo.nome = this.kc.profile.firstName + (this.kc.profile.lastName ? ' '+this.kc.profile.lastName : '');
                    this.userInfo.cpf = this.kc.profile.username;
                    this.userInfo.email = this.kc.profile.email;
                    console.log(this.userInfo);
                    this.spinner.hide();
                    resolve();
                });
            })
            .catch((data: any) => {
                console.log(data);
                this.spinner.hide();
                this.aviso.putError("Erro ao tentar se conectar ao serviço de login.");
                reject();
            }); 
        });
    }

    autenticated(): boolean {
        return this.kc.authenticated;
    }

    userInfoData(): UserInfo {
        return this.userInfo;
    }

    logout() {
        this.kc.logout();
    }

}
