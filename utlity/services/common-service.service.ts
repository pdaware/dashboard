import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  userName: string = 'User';
  password: string = 'User@123';

  isUserLogIn: boolean = false;
  allData: any[] = [];
  courseReminders: any[] = [];
  latestResults: any[] = [];
  learningTime: any[] = [];
  userDetails: any[] = [];

  loader: boolean = false;

  constructor(
    public http: HttpClient,
  ) {
  }



  getData() {
    this.loader = true;
    this.http.get<any>('https://api.jsonbin.io/v3/b/673af531ad19ca34f8cbe3cb')
      .subscribe(data => {
        this.allData = data.record.users[0];
        this.courseReminders = data.record.users[0].courseReminders;
        this.latestResults = data.record.users[0].latestResults;
        this.learningTime = data.record.users[0].learningTime;
        this.userDetails = data.record.users[0].userDetails;
        this.loader = false;
        // console.log('this.productsArray', this.allData);
      }, error => {
        console.error('Error loading data', error);
        this.loader = false;
      });
  }
}
