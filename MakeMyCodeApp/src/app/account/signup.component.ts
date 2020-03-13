import { Component, OnInit } from '@angular/core';
import { UserSignupModel } from '../_utils/models';
import { HttpService } from '../_services/http.service';
import { ThrowStmt } from '@angular/compiler';
import { API_ENDPOINTS, UtilFunction } from '../_utils/utils';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  _user: UserSignupModel = new UserSignupModel();

  constructor(
    private _http: HttpService,
    private route: Router,
    //private _utilFunction: UtilFunction,
    private _snackbar: MatSnackBar,
  ) { }

  ngOnInit() {
    // this._snackbar.open("message", "OK", {
    //   duration: 5000,
    //   horizontalPosition: 'center',
    //   verticalPosition: 'top'
    // });
  }

  signup() {
    // this._http.postData(API_ENDPOINTS.signup, this._user).subscribe(
    //   responseData => {
    //     if (responseData != null) {
    //       console.log(responseData);
    //       if (responseData[0] == 1) {
    //         // this._utilFunction.showMessage(this._snackbar, "Successfully signed up. Please login to continue.", "OK", 3000);
    //         this.route.navigate(["/login"]);
    //       }
    //       else {
    //         // this._utilFunction.showMessage(this._snackbar, "Some error occured. Please try again later.", "OK", 3000);
    //       }
    //     }
    //   });
  }

  validateSignupForm(): boolean {
    return this._user.password == this._user.confirmPassword;
  }

}
