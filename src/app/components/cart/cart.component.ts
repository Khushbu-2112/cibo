import { Component, OnInit , OnDestroy } from '@angular/core';
import { OrderService } from "../../service/order.service";
import { WebService } from "../../service/web.service";
import { Router } from '@angular/router';
import { AuthenitcationService } from "../../service/authentication.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit , OnDestroy {

  orders= [];
  data$;
  sub$;

  mar:boolean = this.orders.length < 5 ? true : false;

  constructor(private orderser:OrderService, private api:WebService, private auth:AuthenitcationService ,private router:Router) { }

  ngOnInit(): void {
     this.data$= this.orderser.getOrderData().subscribe( (x) => {
      // console.log(x);
      this.orders.push(...x);
      // console.log("orders",this.orders);
    });

  }

  orderNow(){
    for(let m in this.orders)
    {
      let obj = { totalAmount:this.orders[m].price*this.orders[m].count , tspId:this.orders[m].enteredBy , menuId:this.orders[m]._id ,userId:this.auth.getUserDetails()._id,deliveryAddress:this.auth.getUserDetails().address};
      // console.log('obj',obj);
      if(this.orders[m].count>0)
      {
        this.sub$ = this.api.post('orders',obj).subscribe(
          (x) =>
          // console.log('ins',x)
          this.orderser.clearData()
        );
      }
    }
    this.router.navigateByUrl('/yourorders')
  }

  ngOnDestroy(){
    this.data$.unsubscribe();
    this.sub$.unsubscribe();
  }

}
