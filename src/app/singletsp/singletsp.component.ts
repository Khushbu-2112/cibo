import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from '../service/web.service';
import { OrderService } from '../service/order.service';
import { TSP } from "../models/tsp";
import { Menu } from "../models/menu";

@Component({
  selector: 'app-singletsp',
  templateUrl: './singletsp.component.html',
  styleUrls: ['./singletsp.component.css']
})
export class SingletspComponent implements OnInit, OnDestroy {

  constructor(private route:ActivatedRoute,private orderser:OrderService , private api:WebService) { }
  loaded:boolean;
  tspId:number;
  private sub$:any;
  data$;
  menu$;
  order$;
  orders:number;
  tspdetails:TSP;
  menulist = [];
  btncheck = false;

  ngOnInit(): void {
    this.sub$ = this.route.params.subscribe(params => {
      this.tspId = params['Id'];
    });

    this.data$ = this.api.get(`tsplist/${this.tspId.toString()}`).subscribe( (x:TSP) => {
      // console.log('x',x)
      this.tspdetails = x[0];
      this.loaded = true;
      //  console.log('tsp',this.tspdetails);
    });
    this.menu$ = this.api.get(`menus/gettsp/${this.tspId}`)
    .subscribe( (x:[Menu]) => {
      // console.log(x);
      this.menulist.push(...x);
    });
    this.order$ = this.api.get(`orders/gettsp/${this.tspId}`)
    .subscribe( (x) => {
      // console.log(x);
      this.orders = x["nooforder"];
    });
  }

  addbtn(menud)
  {
    // console.log(id);
    let data = menud;
    this.orderser.addOrderData(data);
    // this.orderdetails.push(data);
    // console.log(this.orderdetails);
    this.btncheck = true;
  }

  ngOnDestroy()
  {
    this.sub$.unsubscribe();
    this.data$.unsubscribe();
    this.menu$.unsubscribe();
    this.order$.unsubscribe();
  }

}
