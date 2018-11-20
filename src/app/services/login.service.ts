import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {
  //configUrl = 'http://jsonplaceholder.typicode.com/posts';
  configUrl = 'http://localhost:5000/api/cats';
  constructor(private _http: HttpClient) { }

  login() {
    return this._http.get(this.configUrl, {});
  }

}
