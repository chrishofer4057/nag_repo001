import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(private route: ActivatedRoute, private router: Router) {

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


  }

  public getAuthorizationCode(): void  {

  }
}
