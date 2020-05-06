import { Component, OnInit ,OnDestroy } from '@angular/core';
import { AuthenitcationService } from '../../service/authentication.service';
import { WebService } from '../../service/web.service';
import user from "../../models/user";
import { FormBuilder,Validators } from "@angular/forms";
import { MyErrorStateMatcher } from "../../shared/myErrStateMatcher";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

  constructor( private fb:FormBuilder,private auth: AuthenitcationService,private api:WebService) { }

  ngOnInit(): void {
    this.profileform.setValue({"contactNo":this.auth.getUserDetails().contactNo,"email":this.auth.getUserDetails().email,"address":this.auth.getUserDetails().address});
  }

  sub$;
  matcher = new MyErrorStateMatcher();

  profileform = this.fb.group({
    contactNo:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
    email:['',[Validators.required,Validators.email]],
    address:['',[Validators.required]]
  });

  get contactNo() {return this.profileform.get('contactNo')};
  get email() {return this.profileform.get('email')};
  get address() {return this.profileform.get('address')};

  save(){
    // older way without token updating
    //  console.log(this.profileform.value);
    // this.sub$ = this.api.patch(`users/${this.auth.getUserDetails()._id}`,this.profileform.value).subscribe( (x) => {
    //   console.log('i',x);
    // });

    this.sub$ = this.auth.profile(this.profileform.value).subscribe((x) => {
      console.log('updated');
    });

  }

  ngOnDestroy(){
    // this.sub$.unsubscribe();
  }

}
