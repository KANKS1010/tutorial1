import { Injectable } from '@angular/core';
import { UserForRegister } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  
  addUser(user: UserForRegister) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users')as string);
      users = [user, ...users];
    } else {
      users = [user];
    }
    localStorage.setItem('User', JSON.stringify(users));
  }
}
