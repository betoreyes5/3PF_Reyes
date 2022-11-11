import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private router: Router) { }

  logIn({ user, password }: any): Observable<any> {
   console.log('user:'+ user);
   console.log('pw:'+ password);
    if (user === 'areyes5' && password === '2525*') {
      this.setToken(user +'_comision-32320');
      return of({ name: 'Reyes Alberto', email: 'areyes@gmail.com' });
    }
    return throwError(() => new Error(`Invalid Access to ${ user }`));
  }

logOut(){
  localStorage.removeItem('token');
  this.router.navigate(['login'])
}

islogIn(){
  return this.getToken() !== null;
}

getToken(): string | null {
  return localStorage.getItem('token');
}

setToken(tokenUsr: string): void {
  localStorage.setItem('token', tokenUsr);
}



}
