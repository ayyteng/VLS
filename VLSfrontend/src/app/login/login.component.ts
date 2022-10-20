import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  username: string = '';
  password: string = '';
  role: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onFormSubmit(){
      this.username = this.loginForm.value.username;
      this.password = this.loginForm.value.password;

      this.loginService.loginUser(this.username,this.password).subscribe({
        next : (data)=>{
            localStorage.setItem('username',data.userName);
            this.router.navigateByUrl('/display-courses');
        },
        error: (e)=> { }
      });
    } 
}

