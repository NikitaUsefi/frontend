import { Injectable } from '@angular/core';
import { IUser } from '../model/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }
authUser(user:IUser){
  let UserArray:IUser[]=[];
  if(localStorage.getItem('Users')){
    UserArray=JSON.parse(localStorage.getItem('Users'));
  }
  return UserArray.find(p=>p.userName===user.userName
    && p.password===user.password);
}
}
