import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-agregar-cursos',
  templateUrl: './agregar-cursos.component.html',
  styleUrls: ['./agregar-cursos.component.css']
})
export class AgregarCursosComponent implements OnInit {

  formCurso !: FormGroup; 
  
  constructor(
    public dialogRef: MatDialogRef<AgregarCursosComponent>,
    private fb:FormBuilder
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
  }

  CancelarCurso(){
    this.dialogRef.close();
  }

  guardarCurso() {   
    this.dialogRef.close(this.formCurso.value);
  }

}
