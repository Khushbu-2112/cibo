import { Component, OnInit ,OnDestroy } from '@angular/core';
import { WebService } from "../../service/web.service";
import { AuthenitcationService } from "../../service/authentication.service";
import { Order } from "../../models/order";
import { Menu } from 'src/app/models/menu';

@Component({
  selector: 'app-yourorders',
  templateUrl: './yourorders.component.html',
  styleUrls: ['./yourorders.component.css']
})
export class YourordersComponent implements OnInit, OnDestroy {

  constructor(private api: WebService, private auth:AuthenitcationService) { }

  spin:boolean = false;
  sub$;
  orderdata = [];
  menuData = [];

  ngOnInit(): void {
    this.spin = true;
    let user = this.auth.getUserDetails()._id;
    this.sub$ = this.api.get(`orders/getuser/${user}`).subscribe( (x:[Order]) =>{
        this.orderdata.push(...x);
        // console.log(this.orderdata);
      });


    setTimeout(() => {
    //   const distictmenu = [... new Set(this.orderdata.map(x => x.menuId))];
    //   console.log(distictmenu);
    const distictmenu = [... new Set(this.orderdata.map(x => x.menuId))];
    // console.log('dist',distictmenu);
      for(let i in distictmenu){
        // console.log('loop',distictmenu[i]);
        this.api.get(`menus/${distictmenu[i]}`).subscribe( (x:[Menu]) => {
          this.menuData.push(...this.menuData ,x[0]);
          // console.log('f',this.menuData);
        });
      }
      setTimeout(() => {

        this.orderdata.forEach(element => {
          for(let j in this.menuData){
            // console.log(this.menuData[j]);
            if(element.menuId == this.menuData[j]._id)
            {
              // console.log('in if', this.menuData[j].name);
              element["name"] = this.menuData[j].name;
              element["items"] = this.menuData[j].items;
            }
          }
        });
        this.spin = false;
      }, 2000);

    // console.log('ans',this.orderdata);
     }, 5000);
  }

  ngOnDestroy(){

  }

}
