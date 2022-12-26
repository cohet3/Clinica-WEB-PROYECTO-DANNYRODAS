import { Component, } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent  {

  miFormulario: FormGroup = this.fb.group({
    name:    ['Danny', [Validators.required ]],
    telefono:['653130191', [Validators.required ]],
    email:   ['danny@gmail.com', [Validators.required, Validators.email ]],
    password:['1234567', [Validators.required, Validators.minLength(6) ]],
  }
)
  constructor( private fb: FormBuilder,
               private router:Router, 
               private authService: AuthService ) { }
  
  registro() {
    const { name, telefono, email, password } = this.miFormulario.value;
   
    this.authService.registro( name, telefono, email, password )
    .subscribe( ok => {
    
    if ( ok === true ) {
      this.router.navigateByUrl('/dashboard');
    }else{
       Swal.fire('Error', ok, 'error');
    }
    });
  }

}
