import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebService } from "../service/web.service";
import { TSP } from "../models/tsp";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-quicksearch',
  templateUrl: './quicksearch.component.html',
  styleUrls: ['./quicksearch.component.css']
})
export class QuicksearchComponent implements OnInit, OnDestroy {

  constructor(private route:ActivatedRoute, private api:WebService) { }

  type:string;
  private sub$:any;
  tsp$;
  title:string = 'Find TSP Here';

  tsplist = [];
  available;

  ngOnInit(): void {
    this.sub$ = this.route.params.subscribe(params => {
      this.type = params['type'];
      this.title = `Search for ${this.type}`;
    });

    this.tsp$ = this.api.get('tsplist')
    .subscribe((x:[TSP]) => {
      for(let i in x){
        let newx = x[i].serves.includes(this.type);
        if(newx){
          let add:Object = x[i];
          this.tsplist.push(add);
        }
        // console.log(newx);
      }
      // console.log(this.tsplist);
      // this.tsplist.push(...x);
    });
    // setTimeout(() => {
    //   console.log(this.tsplist);
    // }, 2000);
  }

  ngOnDestroy()
  {
    this.sub$.unsubscribe();
    this.tsp$.unsubscribe();
  }

}

// .pipe(filter( (data)=>
// data[0].serves.includes(this.type)
// ))
