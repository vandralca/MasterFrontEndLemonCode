import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public get anio() {
    return new Date(Date.now()).getFullYear();
  }
}
