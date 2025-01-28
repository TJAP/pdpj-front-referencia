import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EnvService {

  // Os valores definidos aqui serão substituídos pelos configurados no env.js,
  // caso o env.js seja carregado com sucesso.

  public production: boolean;
  public nome: string;
  public descricao: string;
  public apiUrl: string;
  public ssoUrl: string;
  public realm: string;
  public clientId: string;
  public redirectUri: string;
  

  constructor() {
    const keyEnv = '__env';
    const browserWindowEnv = window[keyEnv] || {};
    // Assign environment variables from browser window to env
    // In the current implementation, properties from env.js overwrite defaults from the EnvService.
    // If needed, a deep merge can be performed here to merge properties instead of overwriting them.
    for (const key of Object.keys(browserWindowEnv)) {
      this[key] = browserWindowEnv[key];
    }
  }
}
