import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "./auth.conig";
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  set accessTokenDecoded(value: object) {
  }
  title = 'Angular-Oauth2';

  public codeString: string = '';
  public showCode: boolean = false;
  public routerURl: string = '';
  public callBackurl: string = '';
  public accessToken: string | null = '';
  // @ts-ignore
  public _accessTokenDecoded: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
  }

  ngOnInit(): void {
    this.routerURl = window.location.href;
    this.route.queryParams
      .subscribe(params => {
          console.log(params['code']);
          this.callBackurl = this.router.url;
          this.codeString = params['code'];
        }
      );
  }

  public getCode(): void {
    this.showCode = true;
  }

  public getTokenFromCode(): void  {
    this.oauthService.tryLoginCodeFlow();
    this.oauthService.hasValidAccessToken()


    this.accessToken = sessionStorage.getItem("access_token");
    this._accessTokenDecoded = JSON.stringify(jwt_decode(<string>sessionStorage.getItem("access_token")));
  }

  public getAuthorizationCode(): void  {
    this.oauthService.initCodeFlow();
  }
}
