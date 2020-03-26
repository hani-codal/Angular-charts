import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { GoogleChartMapComponent } from './google-chart-map/google-chart-map.component';
import { MapDemoComponent } from './map-demo/map-demo.component';


const routes: Routes = [
  {
    path:'pie-chart',
    component : PieChartComponent
  },
  {
    path :'google-chart',
    component : GoogleChartMapComponent
  },
  {
    path : 'google-map',
    component : MapDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
