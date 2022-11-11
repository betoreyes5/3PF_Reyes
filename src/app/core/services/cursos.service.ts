import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Curso } from 'src/app/core/models/curso.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: Curso[] = [];
  cursosSubject: BehaviorSubject<Curso[]> = new BehaviorSubject(this.cursos);

  constructor(private http: HttpClient) { }

  listaCursos(): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${environment.apiURL}/cursos`).pipe(
      catchError(this.manejarError)
    )
  }
  
  agregarCurso(curso:Curso){
    return this.http.post(`${environment.apiURL}/cursos`,curso).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }
  
  editarCurso(curso: Curso){
    this.http.put<Curso>(`${environment.apiURL}/cursos/${curso.id}`, curso).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
  }
  
  eliminarCurso(id:number){  
    this.http.delete<Curso>(`${environment.apiURL}/cursos/${id}`).pipe(
      catchError(this.manejarError)
    ).subscribe(console.log);
    alert("Se elimino el registro");  
  }


  private manejarError(error: HttpErrorResponse){

    if(error.error instanceof ErrorEvent){
      console.warn('Error cliente-cursos', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }
    return throwError(() => new Error('Error en la comunicacion HTTP-API-Cursos'));

  }
  

}
