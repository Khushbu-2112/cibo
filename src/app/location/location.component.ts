import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { stringify } from 'querystring';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private http:HttpClient) { }

  lat;
  long;

  ngOnInit(): void {
    // if(navigator.geolocation){
    //   navigator.geolocation.getCurrentPosition((x)=>{
    //     this.lat = x.coords.latitude;
    //     this.long = x.coords.longitude;
    //     this.oreverceGeocode();
    //   });
    // }
  }
  obse$;
  oreverceGeocode()
  {
    let object1 = {x:this.lat,y:this.long};
    let location1 = stringify(object1);
    const params = new HttpParams()
    .set('location',location1)
    .set('f',"json");
    let url = 'http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode';

    this.obse$ = this.http.get(url,{params});

    this.obse$.subscribe((x)=>
    {
      console.log(x)
      console.log('subscribed');
    });
  }

}
