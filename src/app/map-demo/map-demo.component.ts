import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-demo',
  templateUrl: './map-demo.component.html',
  styleUrls: ['./map-demo.component.css']
})
export class MapDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = '';
  type = 'Map';
  data = [
     [37.4232, -122.0853, "Work"],
     [37.4289, -122.1697, "University"],
     [37.6153, -122.3900, "Airport"],
     [37.4422, -122.1731, "Shopping"]
  ];
  columnNames = ["Latitude","Longitude","Name"];
  options = {   
    showTip: true
  };
  width = 550;
  height = 400;
}
