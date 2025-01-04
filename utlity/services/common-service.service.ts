import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  userName: string = 'User';
  password: string = 'User@123';

  isUserLogIn: boolean = false;

  constructor() { }
}
