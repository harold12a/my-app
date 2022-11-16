import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RegistroComponent } from './registro/registro.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { AreasComponent } from './areas/areas.component';
import { RankingComponent } from './ranking/ranking.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

const appRoutes:Routes = [

  { path:'', component: HomeComponent },
  { path:'Profesionales', component:ProfesionalesComponent},
  { path:'Proyectos', component:ProyectosComponent},
  { path:'Servicios', component:ServiciosComponent},
  { path:'Solicitud', component:SolicitudComponent},
  { path:'Usuarios', component:UsuariosComponent},
  { path:'Cotizacion', component:CotizacionComponent},
  { path:'Contacto', component:ContactoComponent},
  { path:'Areas', component:AreasComponent},
  { path:'Ranking', component:RankingComponent}
]
  


@NgModule({
  declarations: [
    AppComponent,
    ProfesionalesComponent,
    ServiciosComponent,
    ProyectosComponent,
    ContactoComponent,
    RegistroComponent,
    UsuariosComponent,
    SolicitudComponent,
    CotizacionComponent,
    AreasComponent,
    RankingComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent,ProyectosComponent,ServiciosComponent,ProfesionalesComponent]
})
export class AppModule { }
