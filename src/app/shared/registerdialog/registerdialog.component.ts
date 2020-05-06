import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from "@angular/forms";
import { MyErrorStateMatcher } from "../myErrStateMatcher";
import { MatDialogRef } from "@angular/material/dialog";
import { AuthenitcationService } from '../../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerdialog',
  templateUrl: './registerdialog.component.html',
  styleUrls: ['./registerdialog.component.css']
})
export class RegisterdialogComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router ,private dref:MatDialogRef<RegisterdialogComponent>, private auth:AuthenitcationService) { }

  ngOnInit(): void {
  }
  hide = true;
  matcher = new MyErrorStateMatcher();

  registerform = this.fb.group({
    contactNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
    address:['',[Validators.required]]
  });

  get contactNo() {return this.registerform.get('contactNo')};
  get password() {return this.registerform.get('password')};
  get email() {return this.registerform.get('email')};
  get address() {return this.registerform.get('address')};

  onSubmit(){
    if(this.registerform.valid)
    {
      this.auth.register(this.registerform.value).subscribe( () => {
        this.router.navigateByUrl('/');
      }, (err) => {
        console.error(err);
      });
      this.dref.close(this.registerform.value);
      this.registerform.reset();
    }
  }

  onCancel() {
    this.dref.close();
  }


}
