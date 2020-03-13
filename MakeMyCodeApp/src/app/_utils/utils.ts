import { MatSnackBar } from '@angular/material/snack-bar';

export const BRAND_NAME = {
    text: "<span class='red-text'>M</span>ake<span class='red-text'>M</span>y<span class='red-text'>C</span>ode"
}

export class UtilFunction {
    constructor(private snackbar: MatSnackBar){

    }
    public showMessage(snackbar: MatSnackBar, message: string, action?: string, timeout?: number): void {
        if (timeout == undefined) {
            timeout = 5000;
        }

        snackbar.open(message, action, {
            duration: timeout,
            horizontalPosition: 'center',
            verticalPosition: 'top'
        });
    }
}
export const RESPONSE_CODES = {
    successResponse: 1,
    failResponse: 2,
    authenticateFailResponse: 3,
    duplicate: 4
};

var baseApiUrl = 'http://mmc.me';

export const API_ENDPOINTS = {
    createPost: baseApiUrl + "/post/SavePost",
    login: baseApiUrl + "/post/Login",
    signup: baseApiUrl + "/Account/Signup"
}