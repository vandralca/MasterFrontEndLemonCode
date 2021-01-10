import { Injectable } from '@angular/core';
import { Image } from '../../model/image';

@Injectable({
  providedIn: 'root'
})
export class GaleriaService {
  constructor() { }

  public obtenerImagenes() : Promise<Image[]> {
    return Promise.resolve([
      {
        id: 1,
        src: "assets/heroes_dc_01.jpg",
        titulo: "Héroes de DC",
      },
      {
        id: 2,
        src:"assets/heroes_marvel_01.jpg",
        titulo: "Héroes de Márvel",
      },
      {
        id: 3,
        src:"assets/heroes_marvel_02.jpg",
        titulo: "Ironman",
      },
      {
        id: 4,
        src:"assets/heroes_marvel_03.jpg",
        titulo: "Spiderman",
      },
      {
        id: 5,
        src:"assets/heroes_marvel_04.jpg",
        titulo: "X-men",
      },
      {
        id: 6,
        src:"assets/heroes_marvel_05.jpg",
        titulo: "Lobezno",
      },
      {
        id: 7,
        src:"assets/heroes_marvel_06.jpg",
        titulo: "Dead Pool",
      },
      {
        id: 8,
        src:"assets/villanos_dc_01.jpg",
        titulo: "Villanos de DC",
      },
      {
        id: 9,
        src:"assets/villanos_marvel_01.jpg",
        titulo: "Villanos de Marvel",
      },
      {
        id: 10,
        src:"assets/villanos_marvel_02.jpg",
        titulo: "Loki",
      },
    ]);
  }
}
