import { Component, OnInit , AfterViewInit } from '@angular/core';
import { WebService } from '../../service/web.service';
import { take, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private api:WebService) { }

  nooftsp:number;
  noofusers:number;
  totalorders:number;

  ngOnInit(): void {
    this.find();
  }

  ngAfterViewInit():void{
    this.find();
  }

  find(){
    // console.log('in find');
    this.api.get('orders/get/count').subscribe( (x) => {
      // console.log('order');
      // console.log(x["count"]);
      this.totalorders = x["count"];
    });
    this.api.get('tsplist/get/count').subscribe( (x) => {
      // console.log('tsp');
      // console.log(x["count"]);
      this.nooftsp = x["count"];
    });
    this.api.get('users/get/count').subscribe( (x) => {
      // console.log('user');
      //   console.log(x["count"]);
      this.noofusers = x["count"];
    });
  }

}
