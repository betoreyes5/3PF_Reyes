import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/core/models/curso.interface';
import { CursosService } from '../../../core/services/cursos.service';
import { AgregarCursosComponent } from './acciones/agregar-cursos/agregar-cursos.component';
import { EditarCursosComponent } from './acciones/editar-cursos/editar-cursos.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos$!:  Observable<Curso[]>;

  constructor(
    private dialog: MatDialog, 
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    this.cursos$ = this.cursosService.listaCursos()
  }

  openDialog(): void {
    this.dialog.open(AgregarCursosComponent, {
      width: '45%',
      height: '60%',            
    }).afterClosed().subscribe((result: any) => { 
      if( result != undefined){
       this.nuevoCurso(result);
     // console.log( result )
      }         
   });
  }

  nuevoCurso(curso:any){
    this.cursosService.agregarCurso(curso);
    this.obtenerListaCursos();
  }

  editarCurso(element:any ){
    this.dialog.open(EditarCursosComponent, {
      width: '45%',
      height: '60%', 
      data: element         
    }).afterClosed().subscribe((result: any) => { 
      if( result != undefined){
      // console.log(result)
        this.cursosService.editarCurso(result);
        this.obtenerListaCursos();
      }     
    }); 
  }

  eliminarCurso(id:number){
    this.cursosService.eliminarCurso(id);
    this.obtenerListaCursos();
  }

  obtenerListaCursos(){
    this.cursos$ = this.cursosService.listaCursos()
  }

}
