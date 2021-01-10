import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  private user: string = '';
  private password: string = '';
  private loginError: string = '';
  private loginResult: Subscription | null = null;
  private loginEnProceso: boolean = false;

  constructor(private authService: AuthService, private router: Router) {

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

  public get LoginEnProceso(): boolean {
    return this.loginEnProceso;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.loginResult?.unsubscribe();
  }

  public logIn() {
    this.loginResult?.unsubscribe();
    this.loginEnProceso = true;
    this.loginResult = this.authService.login(this.user, this.password).subscribe(
      loginSucess => {
        if (loginSucess) {
          this.router.navigate(['/dashboard']);
          this.loginEnProceso = false;
        }
        else {
          this.LoginError = 'Usuario y/o contraseña incorrectos';
          this.loginEnProceso = false;
        }
      },
      e => {
        this.LoginError = 'Se produjo un error durante la autenticación';
        this.loginEnProceso = false;
      }
    );
  }
}
