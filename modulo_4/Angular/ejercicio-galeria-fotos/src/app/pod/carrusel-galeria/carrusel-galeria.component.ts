import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from '../../model/image';

@Component({
  selector: 'app-carrusel-galeria',
  templateUrl: './carrusel-galeria.component.html',
  styleUrls: ['./carrusel-galeria.component.scss']
})
export class CarruselGaleriaComponent implements OnInit {
  private pagina = 1;
  private tamanioPagina = 4;
  private imagenSeleccionada = -1;
  private imagenSeleccionadaChange = new EventEmitter<number>()

  @Input()
  public imagenes : Image[] = [];

  @Input()
  public set ImagenSeleccionada(valor: number) {
    this.imagenSeleccionada = valor;

    this.pagina = Math.trunc(this.imagenSeleccionada / this.tamanioPagina) + 1;
  };

  public get ImagenSeleccionada() : number {
    return this.imagenSeleccionada;
  };

  @Output()
  public get ImagenSeleccionadaChange()
  {
    return this.imagenSeleccionadaChange;
  }

  public get PuedeCargarPaginaAnterior() {
    return this.pagina > 1;
  }

  public get PuedeCargarPaginaSiguiente() {
    return this.pagina < Math.ceil(this.imagenes.length / this.tamanioPagina);
  }

  public get desdeImagenIncluida() : number {
    return (this.pagina - 1) * this.tamanioPagina;
  }

  public get hastaImagenNoIncluida() : number {
    return Math.min(this.pagina * this.tamanioPagina, this.imagenes.length);
  }

  constructor() { }

  ngOnInit(): void {
  }

  // public obtenerImagenesPaginaActual() {
  //   this.imagenesPaginaActual = [];

  //   for (let i = (this.pagina - 1) * this.tamanioPagina; i < this.pagina * this.tamanioPagina && i < this.imagenes.length; i++)
  //   {
  //     this.imagenesPaginaActual = [...this.imagenesPaginaActual, this.imagenes[i]];
  //   }
  // }

  public cargarPaginaAnterior() {
    if (this.PuedeCargarPaginaAnterior)
    {
      this.pagina--;
    }
  }

  public cargarPaginaSiguiente() {
    if (this.PuedeCargarPaginaSiguiente)
    {
      this.pagina++;
    }
  }

  public seleccionarImagen(imagen: Image) {
    this.imagenSeleccionadaChange.emit(this.imagenes.indexOf(imagen));
  }
}
