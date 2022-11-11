import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-cursos',
  templateUrl: './editar-cursos.component.html',
  styleUrls: ['./editar-cursos.component.css']
})
export class EditarCursosComponent implements OnInit {

  formCurso !: FormGroup; 
  
  constructor(
    public dialogRef: MatDialogRef<EditarCursosComponent>,
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public editaElement : any
  ) { 
    this.formCurso = this.fb.group({
      id:['',[Validators.required]],
      curso:['',[Validators.required]],
      profesor:['',Validators.required],
      costo:['',[Validators.required]],     
      fecha:['',[Validators.required]]     
    });
  }

  ngOnInit(): void {
    if(this.editaElement){  
      this.formCurso.controls["id"].setValue(this.editaElement.id);
      this.formCurso.controls["curso"].setValue(this.editaElement.curso);
      this.formCurso.controls["profesor"].setValue(this.editaElement.profesor);
      this.formCurso.controls["costo"].setValue(this.editaElement.costo);   
      this.formCurso.controls["fecha"].setValue(this.editaElement.fecha);   
     }
  }

  CancelarCurso(){
    this.dialogRef.close();
  }

  ActualizaCurso(){
    //console.log(this.formCurso)
    this.dialogRef.close(this.formCurso.value);
  }


}
