import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, Tick, Scale } from 'chart.js';

@Component({
  selector: 'app-monthly-income',
  templateUrl: './monthly-income.component.html',
  styleUrls: ['./monthly-income.component.css']
})
export class MonthlyIncomeComponent implements OnInit {

  public lineChartOptions: ChartOptions = {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(this: Scale, tickValue: string | number, index: number, ticks: Tick[]) {
            return 'S/' + tickValue;
          }
        }
      }
    }
  };

  public lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartData = [
    {
      data: Array.from({length: 12}, (_, i) => {
        return {
          x: this.lineChartLabels[i],
          y: Math.floor(Math.random() * 100)
        };
      }),
      label: 'Income',
      backgroundColor: 'rgba(54,162,235,0.2)',
      borderColor: 'rgba(54,162,235,1)',
      borderWidth: 1
    },
    {
      data: Array.from({length: 12}, (_, i) => {
        return {
          x: this.lineChartLabels[i],
          y: Math.floor(Math.random() * 100)
        };
      }),
      label: 'Expense',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
