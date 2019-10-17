import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Api } from 'src/app/app.api';
import { Login } from 'src/app/modelo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public year_now: string = new Date().getFullYear().toString();
  public visibility_icon: boolean;
  public password_type: string;
  public loginform: FormGroup;
  public logindata: Login;

  constructor(
    public api: Api,
    public formBuilder: FormBuilder,
    private router: Router) {
   
    this.showVisibilitPassword();
  }

  ngOnInit() {
    this.logindata = new Login();
    this.loginform = this.formBuilder.group({
      username: [this.logindata.username, [Validators.required]],
      password: [this.logindata.password, [Validators.required]]
    });
  }

  showVisibilitPassword() {
    this.password_type = (this.visibility_icon) ? "text" : "password";
    this.visibility_icon = !this.visibility_icon
  }

  login() {    
    this.api.login(this.loginform.value).then(data => {
      if(data){
        this.router.navigate(['/inicio'])
      }
    });
  }

}
