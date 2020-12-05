import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service';

@Component({
  selector: 'app-menu-privado',
  templateUrl: './menu-privado.component.html',
  styleUrls: ['./menu-privado.component.scss']
})
export class MenuPrivadoComponent implements OnInit {

  constructor(private AuthService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  public get userName() : string | null {
    return this.AuthService.getUsername();
  }

  public salir() {
    this.AuthService.logout();
    this.router.navigate(['/']);
  }
}
