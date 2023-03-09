import {AuthConfig} from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  redirectUri: 'http://localhost:4200/callback',
  responseType: 'code',
  issuer: 'https://dev-26621619.okta.com/oauth2/default',
  strictDiscoveryDocumentValidation: false,
  tokenEndpoint: 'https://dev-26621619.okta.com/oauth2/default/v1/token',
  loginUrl: 'https://dev-26621619.okta.com/oauth2/default/v1/authorize',
  clientId: '0oa4bd3okcnaWY6Nn5d7',
  scope: 'openid profile'
}
