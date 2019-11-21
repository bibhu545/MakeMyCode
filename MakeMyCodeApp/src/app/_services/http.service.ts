import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  public postData(url: string, data: any, auththenticationNeeded: boolean = false): any {
    return this._http.post(url, JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/jsonp',
          'Accept': 'q=0.8;application/jsonp;q=0.9',
          // 'Authorize-Token': this._userUtilities.getLoginKeyFromCookies()
        }
      });
  }
}
