import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from '../../../utlity/services/common-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cs: CommonServiceService,
    public router: Router,
    private toster: ToastrService
  ) {

  }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onClickSubmit() {
    if (this.loginForm.valid) {
      if (this.loginForm.controls['userName'].value === this.cs.userName && this.loginForm.controls['password'].value === this.cs.password) {
        this.cs.isUserLogIn = true;
        this.toster.success('Login Sucessfully', '', { timeOut: 3000, progressBar:true, positionClass: 'toast-bottom-center', enableHtml: true });
        setTimeout(() => {
          this.cs.getData();
          this.router.navigateByUrl('/dashboard/home');
        }, 3000);

      } else {
        this.toster.error('User Name or Password is incorrect', 'Error', {
          timeOut: 30000, positionClass: 'toast-bottom-center', progressBar: true,
          closeButton: true,
          onActivateTick: true, enableHtml: true
        });
        // this.router.navigateByUrl('/product-detail');
      }
    }
  }
}
