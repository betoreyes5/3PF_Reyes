import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ELEMENT_DATA } from 'src/app/core/models/alumno.interface';
import { AgregarAlumnosComponent } from './acciones/agregar-alumnos/agregar-alumnos.component';
import { EditarAlumnosComponent } from './acciones/editar-alumnos/editar-alumnos.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  displayedColumns: string[] = ['numero', 'correo', 'nombre', 'password','accion'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(AgregarAlumnosComponent, {
      width: '45%',
      height: '45%',
            
    }).afterClosed().subscribe((result: any) => { 
       if( result != undefined){
        this.nuevoAlumno(result)
       }         
    });
  }

  borrarAlumno(id: number) {
  //  console.log('eliminar');  
    let posicion = ELEMENT_DATA.findIndex(alumno => alumno.numero == id)
    ELEMENT_DATA.splice(posicion, 1)
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);  
  }

  editarAlumno( element:any ){
   this.dialog.open(EditarAlumnosComponent, {
      width: '45%',
      height: '55%',
      data: element      
    }).afterClosed().subscribe((result: any) => { 
      if( result != undefined){
        this.actualizaAlumno( result.numero, result.correo, result.nombre, result.password)
      }     
    }); 
  }

nuevoAlumno(result:any){
  ELEMENT_DATA.push(
    {
      ...result,
      numero:ELEMENT_DATA.length + 1 
    }
  )
  this.dataSource = new MatTableDataSource(ELEMENT_DATA);
}

actualizaAlumno( c1:number, c2:string, c3:string, c4:string  ){
 
  ELEMENT_DATA.forEach( elemento =>{
    if ( elemento.numero ===  c1){
      elemento.correo = c2,
      elemento.nombre = c3,
      elemento.password = c4      
    }
  })
  this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }


}
