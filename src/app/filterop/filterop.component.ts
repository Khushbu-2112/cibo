import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from '../service/web.service';
import { TSP } from '../models/tsp';

@Component({
  selector: 'app-filterop',
  templateUrl: './filterop.component.html',
  styleUrls: ['./filterop.component.css']
})
export class FilteropComponent implements OnInit , OnDestroy{

  constructor(private route:ActivatedRoute, private api:WebService) { }

  type:string;
  private sub$:any;
  data$;
  tspData = [];
  data = [];
  trending = [];

  ngOnInit(): void {
    this.sub$ = this.route.params.subscribe(params => {
      this.type = params['type'];
    });

    if(this.type == 'HighRate')
    {
      this.data$ = this.api.get(`tsplist/get/highRated`).subscribe( (x:[TSP]) => {
        // console.log(x);
        this.tspData.push(...x);
      });
    }
    else if(this.type == 'NewOne'){
      this.data$ = this.api.get(`tsplist/get/newOne`).subscribe( (x:[TSP]) => {
        // console.log(x);
        this.tspData.push(...x);
      });
    }
    else{
      this.data$ = this.api.get(`orders/get/trending`).subscribe( (x:[]) => {
        // console.log(x);
        this.data.push(...x);
      });
      setTimeout(() => {
        this.data.forEach(el => {
          this.trending = [...this.trending,el._id];
          // console.log(this.trending);
        });
        this.api.post(`tsplist/get/getTSP`,this.trending).subscribe( (x:[TSP]) => {
          // console.log(x);
          this.tspData.push(...x);
        })
      }, 2000);
    }

  }

  ngOnDestroy()
  {
    this.sub$.unsubscribe();
    this.data$.unsubscribe();
  }

}
