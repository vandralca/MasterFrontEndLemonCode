import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from '../../model/image';

@Component({
  selector: 'app-botonera-galeria',
  templateUrl: './botonera-galeria.component.html',
  styleUrls: ['./botonera-galeria.component.scss'],
})
export class BotoneraGaleriaComponent implements OnInit {
  private intervaloTiempoPlay = 2000;
  private interval: any = null;

  @Input()
  public imagenes: Image[] = [];

  @Input()
  public imagenSeleccionada: number = -1;

  @Output()
  public imagenSeleccionadaChange = new EventEmitter<number>();

  @Output()
  public aumentar = new EventEmitter();

  @Output()
  public disminuir = new EventEmitter();

  private isPlaying = false;

  public get PuedeCargarAnterior(): boolean {
    return this.imagenSeleccionada > 0;
  }

  public get PuedeCargarSiguiente(): boolean {
    return this.imagenSeleccionada < this.imagenes.length - 1;
  }

  public get IsPlaying(): boolean {
    return this.isPlaying;
  }

  constructor() {}

  ngOnInit(): void {}

  public cargarAnterior() {
    if (this.PuedeCargarAnterior) {
      this.imagenSeleccionada--;
      this.imagenSeleccionadaChange.emit(this.imagenSeleccionada);
    }
  }

  public cargarSiguiente() {
    this.imagenSeleccionada =
      (this.imagenSeleccionada + 1) % this.imagenes.length;
    this.imagenSeleccionadaChange.emit(this.imagenSeleccionada);
  }

  public aumentarImagen() {
    this.aumentar.emit();
  }

  public disminuirImagen() {
    this.disminuir.emit();
  }

  public empezarReproduccion() {
    this.isPlaying = true;

    this.interval = setInterval(() => {
      if (this.isPlaying) {
        this.cargarSiguiente();
      }
    }, this.intervaloTiempoPlay);
  }

  public pararReproduccion() {
    this.isPlaying = false;
    clearInterval(this.interval);
  }
}
