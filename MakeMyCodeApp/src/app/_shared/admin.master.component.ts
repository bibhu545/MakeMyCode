import { Component, OnInit } from '@angular/core';
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
  }

  ngOnInit() {
  }

  changeUI(index: number, $event) {
    $event.preventDefault();
    if (index == 0) {
      this._uiClass = 0;
    }
    else {
      this._uiClass = 1;
    }
  }

}
