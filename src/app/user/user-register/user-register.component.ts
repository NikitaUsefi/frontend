import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getgid } from 'process';
import { IUser } from 'src/app/model/IUser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerationForm:FormGroup;
  user:IUser;
  userSubmitted:boolean;
  constructor(private fb:FormBuilder, private userService:UserService) { }

  ngOnInit() {
    this.createRegisterationForm();
  }

  createRegisterationForm(){
    this.registerationForm=this.fb.group({
      userName:[null,Validators.required],
      email:[null,Validators.required],
      password:[null,[Validators.required,Validators.minLength(8)]],
      confirmPassword:[null,Validators.required],
      mobile:[null,[Validators.required,Validators.maxLength(10)]]

    },{validators:this.passwordMatchingValidator});
  }

  passwordMatchingValidator(fg:FormGroup): Validators {
    return fg.get('password').value===fg.get('confirmPassword').value? null:
    {notmatched:true};
  }

  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }
  get email(){
    return this.registerationForm.get('email') as FormControl;
  }
  get password(){
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }

  onSubmit(){
    this.userSubmitted=true;
    if(this.registerationForm.valid)
    {
      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted=false;
    }
  }
  userData(): IUser {
    return this.user={
      userName:this.userName.value,
      email:this.email.value,
      password:this.password.value,
      mobile:this.mobile.value
    }

  }
}
