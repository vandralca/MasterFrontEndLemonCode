import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public user: string = '';
  private password: string = '';

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

  ngOnInit(): void {}

  public logIn() {
    const loginSucess = this.AuthService.login(this.user, this.password);

    if (loginSucess) {
      this.router.navigate(['/dashboard']);
    }
  }
}
