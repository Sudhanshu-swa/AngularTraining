import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from './country-code-mapping-model'
import { LoginService } from '../../../shared/service/login-service'
import { IUser } from '../../../shared/model/user-model';
import {MatButtonModule, MatCheckboxModule,MatTextareaAutosize} from '@angular/material';
// import "~@angular/material/prebuilt-themes/indigo-pink.css";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';
  userPwd = '';
  userList: IUser[];
  constructor(private router: Router, private _loginService: LoginService) { }

  ngOnInit() {
    this._loginService.getUserList().then((userData) => this.getData(userData));
  }
  getData(data: any) {

    this.userList = data;
  }
  goToProduct() {
    this.router.navigate(['add-product']);
  }

  loginUser(e) {
    if (this.userName == 'admin' && this.userPwd == 'admin')
      this.router.navigate(['dashboard']);
  }
  goToRegistration() {
    this.router.navigate(['registration']);
  }

  doLogin() {
    let users = this.userList.filter(item => item.name == this.userName && item.password == this.userPwd);
    if (users.length > 0) {
      window.localStorage.setItem('username', this.userName);
      this.router.navigate(['dashboard']);
    } else {
      alert('Invaild User name/ password');
    }

  }
}


