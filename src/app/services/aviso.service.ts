import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { SnackMessengerComponent } from "@shared/components/snack-messenger/snack-messenger.component";
import { Message, MessageActions } from "@models/snack-message.model";

@Injectable({
    providedIn: 'root'
})
export class AvisoService {

    constructor (public snackBar: MatSnackBar) {}

    private config(mensagem: string, tipo: string, icon: string, duration?: number): MatSnackBarConfig {

        //Custom data utilizado no template do snack-messenget-component
        const customData = new Message();
        customData.text = mensagem;
        customData.action = MessageActions[tipo];
        customData.icon = `fas fa-${icon}`;

        //Configurações do snackbar
        const config = new MatSnackBarConfig();
        if (duration) {
            config.duration = duration; // em milissegundos
        }
        config.panelClass = [`snack-bar-${tipo}-color`];
        config.data = { message: customData };

        return config;
    }

    putSuccess(mensagem: string, duration: number = 3000) {
        this.snackBar.openFromComponent(SnackMessengerComponent, this.config(mensagem, 'success', 'check-circle', duration));
    }

    putError(mensagem: string, duration?: number) {
        this.snackBar.openFromComponent(SnackMessengerComponent, this.config(mensagem, 'error', 'times-circle', duration));
    }
}