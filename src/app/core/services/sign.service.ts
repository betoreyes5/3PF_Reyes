import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor( private Http: HttpClient ) { }

  agregarUsuario(usuario:Usuario){
    this.Http.post(`${ environment.apiURL }/usuarios`, usuario).subscribe(console.log);
    alert('Validando proceso de registro ... seguir instrucciones');
   }
  
}
