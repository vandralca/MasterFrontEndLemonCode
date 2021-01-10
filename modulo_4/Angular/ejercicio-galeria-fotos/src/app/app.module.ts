import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContenidoCentradoComponent } from './layout/comun/contenido-centrado/contenido-centrado.component';
import { PieComponent } from './layout/comun/pie/pie.component';
import { CabeceraPrivadaComponent } from './layout/privado/cabecera-privada/cabecera-privada.component';
import { MenuPrivadoComponent } from './layout/privado/menu-privado/menu-privado.component';
import { CabeceraPublicaComponent } from './layout/publico/cabecera-publica/cabecera-publica.component';
import { MenuPublicoComponent } from './layout/publico/menu-publico/menu-publico.component';
import { AcercaDeComponent } from './page/acerca-de/acerca-de.component';
import { CrudComponent } from './page/crud/crud.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { GaleriaComponent } from './page/galeria/galeria.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { ProfileComponent } from './page/profile/profile.component';
import { BotoneraGaleriaComponent } from './pod/botonera-galeria/botonera-galeria.component';
import { CarruselGaleriaComponent } from './pod/carrusel-galeria/carrusel-galeria.component';
import { RotateDirective } from './pod/rotate/rotate.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContenidoCentradoComponent,
    PieComponent,
    CabeceraPrivadaComponent,
    MenuPrivadoComponent,
    CabeceraPublicaComponent,
    MenuPublicoComponent,
    AcercaDeComponent,
    CrudComponent,
    DashboardComponent,
    GaleriaComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    BotoneraGaleriaComponent,
    CarruselGaleriaComponent,
    RotateDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
