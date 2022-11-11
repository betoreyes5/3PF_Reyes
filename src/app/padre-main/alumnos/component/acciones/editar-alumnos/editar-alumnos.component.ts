import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-alumnos',
  templateUrl: './editar-alumnos.component.html',
  styleUrls: ['./editar-alumnos.component.css']
})
export class EditarAlumnosComponent implements OnInit {

  formAlumno !: FormGroup;
  
  constructor(
    private fb:FormBuilder,
    public dialogRef: MatDialogRef<EditarAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) public editaElement : any 
  ) { 
    this.formAlumno = this.fb.group({
      numero: [],
      correo: ['',[Validators.required]],
      nombre:['',[Validators.required]],
      password: ['',[Validators.required]] 
  });
  }

  ngOnInit(): void {
    if(this.editaElement){  
      this.formAlumno.controls["numero"].setValue(this.editaElement.numero);
      this.formAlumno.controls["correo"].setValue(this.editaElement.correo);
      this.formAlumno.controls["nombre"].setValue(this.editaElement.nombre);
      this.formAlumno.controls["password"].setValue(this.editaElement.password);   
     }
  }

  editarAlumno() {   
    this.dialogRef.close( this.formAlumno.value);
  }

  CancelarAlumno(){
    this.dialogRef.close();
  }

}
