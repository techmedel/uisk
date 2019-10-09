import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public year_now: string = new Date().getFullYear().toString();
  public visibility_icon: boolean;
  public password_type: string;

  constructor() { 
    this.showVisibilitPassword();
  }

  ngOnInit() {
    //location.reload();
  }

  showVisibilitPassword(){
    this.password_type = (this.visibility_icon) ? "text":"password";
    this.visibility_icon = !this.visibility_icon    
  }

}
