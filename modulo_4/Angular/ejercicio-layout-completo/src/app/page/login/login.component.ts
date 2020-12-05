import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private user: string = '';
  private password: string = '';
  private loginError: string = '';

  constructor(private AuthService: AuthService, private router: Router) {

  }

  public get User() : string {
    return this.user;
  }
  public set User(value: string) {
    this.user = value;
  }

  public get Password() : string {
    return this.password;
  }
  public set Password(value: string) {
    this.password = value;
  }

  public get LoginError() : string {
    return this.loginError;
  }
  public set LoginError(value: string) {
    this.loginError = value;
  }

  ngOnInit(): void {}

  public logIn() {
    const loginSucess = this.AuthService.login(this.user, this.password);

    if (loginSucess) {
      this.router.navigate(['/dashboard']);
    }
    else {
      this.LoginError = 'Usuario y/o contraseña incorrectos';
    }
  }
}
