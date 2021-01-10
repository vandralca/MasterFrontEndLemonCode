import { Component } from '@angular/core';
import { AuthService } from './service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ejercicio-layout-completo';
  public get IsUserLogged() : boolean {
    return this.AuthService?.isLogged();
  }

  constructor(private AuthService: AuthService) {
  }
}
