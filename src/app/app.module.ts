import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    ProfesionalesComponent,
    ServiciosComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,ProyectosComponent,ServiciosComponent,ProfesionalesComponent]
})
export class AppModule { }
