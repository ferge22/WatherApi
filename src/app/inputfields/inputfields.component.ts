import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-inputfields',
  templateUrl: './inputfields.component.html',
  styleUrls: ['./inputfields.component.css']
})
export class InputfieldsComponent implements OnInit {
  apikey = 'c5fe492708cf45c6977033d578404be6';
  cityname = '';
  info;
  arrayinfo = [];
  error = "";
  tabs;



  constructor(private apis:ApiserviceService) { }

  ngOnInit() {

  }
  //onclick siunciu siunciu key ir miesta i api
  sendinputvalue(){
    this.error = '';
    this.apis.geturl(this.apikey, this.cityname).
    subscribe(result =>{
    this.info = result;
    // console.log(result);
    console.log(this.arrayinfo)
    this.getfromapi(result);
},
    error => this.error = 'Iveskite miesta!'
 );
  }

  getfromapi(result){
    let v3 =this.arrayinfo.push(result);
    let v2 = this.cityname = ''
    // jeigu city.name tokspat neideti i tabus
    // this.tabs.filter()
  }

  deleteCity(trynk){
    const v1 = this.arrayinfo.indexOf(trynk);
    this.arrayinfo.splice(v1, 1);
  }



}

// let temp = isdata.main.temp;
// let weather = isdata.weather[0].main;
