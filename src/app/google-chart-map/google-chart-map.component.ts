import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-chart-map',
  templateUrl: './google-chart-map.component.html',
  styleUrls: ['./google-chart-map.component.css']
})
export class GoogleChartMapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Browser market shares at a specific website, 2014';
   type = 'AreaChart';
   data = [
     ["2010",1000,200],
     ["2012",200,121],
     ["2020",null,-1212]
   ];
   columnNames = ["year","Expense","sale"];
   options = {    
     isStacked :true,
     hAxis:{
       title :'year'
     }
   };
   width = 550;
   height = 200;
}
