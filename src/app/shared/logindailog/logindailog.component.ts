import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder,Validators } from "@angular/forms";
import { MyErrorStateMatcher } from "../myErrStateMatcher";
import { MatDialogRef } from "@angular/material/dialog";
import { AuthenitcationService } from "../../service/authentication.service";
import { Router } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-logindailog',
  templateUrl: './logindailog.component.html',
  styleUrls: ['./logindailog.component.css']
})
export class LogindailogComponent implements OnInit {

  constructor(private fb:FormBuilder,private dref:MatDialogRef<LogindailogComponent>, private as:AuthenitcationService, private router: Router) { }

  ngOnInit(): void {
  }

  matcher = new MyErrorStateMatcher();

  loginForm = this.fb.group({
    contactNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    password:['',[Validators.required,Validators.minLength(6)]]
  });

  onLogin(){
    if(this.loginForm.valid)
    {
      this.as.login(this.loginForm.value).subscribe((x) => {
        if(x.invalid)
          alert("Invalid Details");
        // console.log(x);
        // if(x=="Invalid"){
        //   this.as.msgiu = "Invalid Credentials";
        //   alert("Invalid Details");
        // }
        this.router.navigateByUrl('/');
      }, (err) => {
        console.error(err);
      });

      this.dref.close(this.loginForm.value);
      this.loginForm.reset();
    }
  }

  get contactNo() {return this.loginForm.get('contactNo')};
  get password() {return this.loginForm.get('password')};

  onCancel() {
    this.dref.close();
  }

}
