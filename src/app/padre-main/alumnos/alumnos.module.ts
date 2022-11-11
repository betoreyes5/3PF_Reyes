import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarAlumnosComponent } from './component/acciones/agregar-alumnos/agregar-alumnos.component';
import { EditarAlumnosComponent } from './component/acciones/editar-alumnos/editar-alumnos.component';
import { AlumnosComponent } from './component/alumnos.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AlumnosComponent,
    AgregarAlumnosComponent,
    EditarAlumnosComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AlumnosModule { }
