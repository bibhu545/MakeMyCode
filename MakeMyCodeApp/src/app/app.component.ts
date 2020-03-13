import { Component } from '@angular/core';
import { Spinkit } from 'ng-http-loader'; 
import { MatSpinner } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MakeMyCodeApp';
  // public matSpinner = MatSpinner;
}
