(function (window) {
    window.__env = window.__env || {};
    window.__env.production = false;
    window.__env.nome = "Configuração Web";
    window.__env.descricao = "Configuração Web - Front-End do Módulo de Configuração";
    window.__env.apiUrl = "http://localhost:8080/api/v1"; //<-Backend/endpoint
	window.__env.ssoUrl = "http://localhost:8280/auth/"; //<-Keycloak/auth/
    window.__env.realm = "pje"; //<-Keycloak realms
    window.__env.clientId = "app-configuracao-web-client-id"; //<-Keycloak clint_id
	window.__env.redirectUri = "http://localhost:4200/"; //<-Fron-End/
  }(this));