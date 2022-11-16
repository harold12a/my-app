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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,ProyectosComponent,ServiciosComponent,ProfesionalesComponent]
})
export class AppModule { }
