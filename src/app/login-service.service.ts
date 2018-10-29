import { Injectable } from '@angular/core';
import { HttpClientModule , HttpClient } from '@angular/common/http';

@Injectable()
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  public signIn(){
    this.http.get('localhost:5000/api/login');
  }

}
