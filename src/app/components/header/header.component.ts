import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { LogindailogComponent } from 'src/app/shared/logindailog/logindailog.component';
import { RegisterdialogComponent } from 'src/app/shared/registerdialog/registerdialog.component';
import { AuthenitcationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private dialog:MatDialog, private router:Router ,public auth: AuthenitcationService) { }

  ngOnInit(): void {
  }

  // loginmsg = this.auth.msgiu;

  openDialogLogin()
  {
    const dialogConfig = new MatDialogConfig();
    // this.dialog.open(LogindailogComponent);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '350px';
    console.log('clicked');
    const dialogRef = this.dialog.open(LogindailogComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );
  }

  openDialogRegister()
  {
    const dialogConfig = new MatDialogConfig();
    // this.dialog.open(LogindailogComponent);
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '350px';
    console.log('clicked');
    const dialogRef = this.dialog.open(RegisterdialogComponent,dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );
  }

}
