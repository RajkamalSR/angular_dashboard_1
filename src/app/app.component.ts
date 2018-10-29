import { LoginServiceService } from './login-service.service';
import { Component, OnInit} from '@angular/core';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  // heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];


  constructor(private _loginService : LoginServiceService) {
    this._loginService.signIn();
  }


  ngOnInit() {
  
  }
}
