import { Component, } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent  {

  miFormulario: FormGroup = this.fb.group({
    name:    ['', [Validators.required ]],
    telefono:['', [Validators.required ]],
    email:   ['', [Validators.required, Validators.email ]],
    password:['', [Validators.required, Validators.minLength(6) ]],
  }
)
  constructor( private fb: FormBuilder,
               private router:Router) { }
  
  registro() {
  console.log(this.miFormulario.value);

  this.router.navigateByUrl('/dashboard')
  }

}
