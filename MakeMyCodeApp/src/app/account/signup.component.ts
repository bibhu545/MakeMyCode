import { Component, OnInit } from '@angular/core';
import { UserSignupModel } from '../_utils/models';
import { HttpService } from '../_services/http.service';
import { ThrowStmt } from '@angular/compiler';
import { API_ENDPOINTS } from '../_utils/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  _user: UserSignupModel = new UserSignupModel();

  constructor(
    private _http: HttpService,
    private route: Router
  ) { }

  ngOnInit() {
  }

  signup() {
    this._http.postData(API_ENDPOINTS.signup, this._user).subscribe(
      responseData => {
        if (responseData != null) {
          console.log(responseData);
          if (responseData[0] == 1) {
            //add snackbar
            this.route.navigate(["/login"]);
          }
          else {

          }
        }
      });
  }

  validateSignupForm(): boolean {
    return this._user.password == this._user.confirmPassword;
  }

}
