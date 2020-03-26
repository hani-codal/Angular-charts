
import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  public SystemName: string = "MarksSheet";
  firstCopy = false;

  // data
  public studentMarksData: Array<number> = [ 50,40,48,55];
 
  public labelMarks: Array<any> = [
      { data: this.studentMarksData,
        label: this.SystemName
      }
  ];
  // labels
  public subjectLabels: Array<any> = ["Maths", "AI", "Python","Angular"];
  
  constructor(  ) { }
  ngOnInit(){}
  public lineChartOptions: any = {
    responsive: true,
    scales : {
      yAxes: [{
        ticks: {
          max : 60,
          min : 0,
        }
      }],
      xAxes: [{
  
 
        }],
    },
      plugins: {
      datalabels: {
        display: true,
        align: 'top',
        anchor: 'end',
        color: "#2756B3",
  

        font: {
          family: 'FontAwesome',
          size: 14
        },
      
      },
      deferred: false

    },

  };
  // public chartColors: Array<any> = [
  //   { // first color
  //     backgroundColor: 'rgba(225,10,24,0.2)',
  //     borderColor: 'rgba(225,10,24,0.2)',
  //     pointBackgroundColor: 'rgba(225,10,24,0.2)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(225,10,24,0.2)'
  //   },
  //   // { // second color
  //   //   backgroundColor: 'rgba(225,10,24,0.2)',
  //   //   borderColor: 'rgba(225,10,24,0.2)',
  //   //   pointBackgroundColor: 'rgba(225,10,24,0.2)',
  //   //   pointBorderColor: '#fff',
  //   //   pointHoverBackgroundColor: '#fff',
  //   //   pointHoverBorderColor: 'rgba(225,10,24,0.2)'
  //   // }
  // ];

  //  _lineChartColors:Array<any> = [{
  //      backgroundColor: 'red',
  //       borderColor: 'red',
  //       pointBackgroundColor: 'red',
  //       pointBorderColor: 'red',
  //       pointHoverBackgroundColor: 'red',
  //       pointHoverBorderColor: 'red' 
  //     }];

//  public legend = "hani marks";

  public ChartType = 'pie';

  public chartClicked(e: any): void {
    console.log(e);
  }
  public chartHovered(e: any): void {
    console.log(e);
  }



}
