import {Component, OnInit} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {ActivatedRoute, Router} from "@angular/router";
import jwt_decode from 'jwt-decode';
import {authConfig} from "./auth.conig";

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

  constructor(private oauthService: OAuthService, private route: ActivatedRoute, private router: Router) {
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
    this.accessToken = sessionStorage.getItem("access_token");
    this._accessTokenDecoded = JSON.stringify(jwt_decode(<string>sessionStorage.getItem("access_token")));

  }

  public getAuthorizationCode(): void  {
    this.oauthService.initCodeFlow();
  }
}
