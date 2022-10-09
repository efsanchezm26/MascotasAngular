import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SidebarComponent } from './section/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AseoComponent } from './contenido/aseo/aseo.component';
import { HomeComponent } from './contenido/home/home.component';
import { FootbarComponent } from './section/footbar/footbar.component';
import { ContactoComponent } from './contenido/contacto/contacto.component';
import { ComidaComponent } from './contenido/comida/comida.component';
import { ConfortComponent } from './contenido/confort/confort.component';
import { RopaComponent } from './contenido/ropa/ropa.component';
import { DisculpasComponent } from './contenido/disculpas/disculpas.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AseoComponent,
    HomeComponent,
    FootbarComponent,
    ContactoComponent,
    ComidaComponent,
    ConfortComponent,
    RopaComponent,
    DisculpasComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
