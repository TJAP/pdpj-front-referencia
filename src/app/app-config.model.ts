export interface AppConfig {
  name: string;
  production: boolean;
  api: {
    url: string;
  };
  authentication: {
    authority: string;
    client_id: string;
    redirect_uri: string;
    silent_redirect_uri: string;
    post_logout_redirect_uri: string;
    response_type: string;
    scope: string;

    automaticSilentRenew: boolean;
    filterProtocolClaims: boolean;
    loadUserInfo: boolean;
    url: string,
    realm: string
  };
}