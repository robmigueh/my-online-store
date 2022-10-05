import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../data/userInfo';
import { RegisterServiceService } from '../service/register/register-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm?:FormGroup;
  user = new UserInfo();

  constructor(private fb: FormBuilder, private registerService:RegisterServiceService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.registerForm =  this.fb.group({
      firstName:['', [Validators.required, Validators.minLength(3)]],
      lastName:['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required]],
    });
  }

  save() {
    this.registerService.postRegistrationForm(this.registerForm?.value).subscribe({
      next(userInfo){
        console.log('Data returned: ', userInfo);
      },
      error(msg){
        console.log('Error getting user info: ', msg);
      }
    });
    console.log(this.registerForm);
    console.log('Registered: ' + JSON.stringify(this.registerForm?.value));
}
populateForm(){
  this.registerForm?.setValue({ //use patchValue to assign values for a subset of the FormControls
firstName: 'Robbie',
lastName:'Migueh',
email:'robbie.migueh@kiandra.com.au',
password: '1234567890'
  });
}
}
