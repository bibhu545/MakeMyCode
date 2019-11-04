import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { BRAND_NAME } from '../_utils/utils';
import { DropdownModel } from '../_utils/models';

@Component({
  selector: 'app-admin.master',
  templateUrl: './admin.master.component.html',
  styleUrls: ['./admin.master.component.css']
})
export class AdminMasterComponent implements OnInit {

  _brandName: String = BRAND_NAME.text;
  _uiList: DropdownModel[] = [];
  _uiClass: number = 0;

  constructor() {
    if(sessionStorage.getItem("uiClass")){
      this._uiClass = parseInt(sessionStorage.getItem("uiClass"));
    }
  }

  ngOnInit() {
  }

  changeUI(index: number, $event) {
    $event.preventDefault();
    if (index == 0) {
      this._uiClass = 0;
      sessionStorage.setItem("uiClass", "0");
    }
    else {
      this._uiClass = 1;
      sessionStorage.setItem("uiClass", "1");
    }
  }

}
