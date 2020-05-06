import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from "rxjs";

export interface OrderDetails {
  _id: string;
  name: string;
  price: number;
  items: [string];
  menuType: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(){}

  orderDataAry= [] ;

  public orderdata = new BehaviorSubject(this.orderDataAry);

  addOrderData(newdata:OrderDetails){
    newdata.count = 1;
    this.orderDataAry =[...this.orderDataAry,newdata]
    this.orderdata.next(this.orderDataAry);
  }

  getOrderData() {
    return this.orderdata.asObservable()
  }

  clearData(){
    this.orderDataAry = [];
    this.orderdata.next(this.orderDataAry);
  }


}
