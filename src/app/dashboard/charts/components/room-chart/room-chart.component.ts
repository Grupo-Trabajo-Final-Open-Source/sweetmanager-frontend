import { Component, OnInit } from '@angular/core';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, ChartType } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale);

@Component({
  selector: 'app-room-chart',
  templateUrl: './room-chart.component.html',
  styleUrls: ['./room-chart.component.css']
})
export class RoomChartComponent implements OnInit {
  public lineChartOptions = {
    responsive: false,
    maintainAspectRatio: false,
  };

  public lineChartData = [
    {
      data: [23, 3, 3, 2],
      label: 'Room Type',
      backgroundColor: [
        'rgba(255,99,132,0.5)',
        'rgba(54,132,235,0.51)',
        'rgba(255,206,86,0.54)',
        'rgba(75,192,192,0.56)',
      ],
      borderWidth: 3
    }
  ];

  public lineChartLabels = ['Economic', 'Standard', 'Deluxe', 'Suite'];
  public lineChartType: ChartType = 'bar';
  public lineChartLegend = true;
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit(): void {
  }
}
