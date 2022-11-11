import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { SignService } from 'src/app/core/services/sign.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formSignIn !: FormGroup; 
  formSignUp !: FormGroup;
  PromesaSubscription!: Subscription; 
  loading!:boolean;

  
  constructor(
          private fb:FormBuilder,
          private authService: AuthService, 
          private signService: SignService,
          private router: Router 
      ) { 
            this.formSignIn = this.fb.group({
              user:['',Validators.required],
              password: ['',[Validators.required]]     
            }),
            this.formSignUp = this.fb.group({
              user: ['',[Validators.required]],
              email:['',Validators.required],   
              password: ['',[Validators.required]] ,
              type: ['','']
            })
  }

  ngOnInit(): void {
    this.loading = false;
    if(this.authService.islogIn()){
      this.router.navigate(['padre-main']);
    }
  }

  validarSesion(){

    this.loading = true;  
  
    setTimeout(() => {
     
      if (this.formSignIn.valid) {
     //   console.log(this.formSignIn.value)
          this.authService.logIn(this.formSignIn.value).subscribe(
          (result:any) => {
            console.log(result);
            this.loading = false;
            this.router.navigate(['padre-main']);
          },
          (err: Error) => {
            this.loading = false;
            alert(err.message);
          }
        );
      }
    }, 1500 );      
    
  }

  guardarUsuario(){
    this.signService.agregarUsuario(this.formSignUp.value);
    this.formSignUp.reset();
  }

}
