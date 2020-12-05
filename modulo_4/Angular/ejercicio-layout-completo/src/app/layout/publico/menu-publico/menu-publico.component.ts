import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-publico',
  templateUrl: './menu-publico.component.html',
  styleUrls: ['./menu-publico.component.scss']
})
export class MenuPublicoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
