import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AppComponent } from './app.component';
import { AseoComponent } from './contenido/aseo/aseo.component';
import { HomeComponent } from './contenido/home/home.component';
import { ContactoComponent } from './contenido/contacto/contacto.component';
import { DisculpasComponent } from './contenido/disculpas/disculpas.component';
import { ComidaComponent } from './contenido/comida/comida.component';
import { ConfortComponent } from './contenido/confort/confort.component';

const routes: Routes = [
  { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
  {
    path: 'admin', component: AppComponent, children:
       [
         { path: 'aseo', component: AseoComponent },
         { path: 'home', component: HomeComponent },
         { path: 'contacto', component: ContactoComponent },
         { path: 'disculpas', component: DisculpasComponent },
         { path: 'comida', component: ComidaComponent },
         { path: 'confort', component: ConfortComponent },
       ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
