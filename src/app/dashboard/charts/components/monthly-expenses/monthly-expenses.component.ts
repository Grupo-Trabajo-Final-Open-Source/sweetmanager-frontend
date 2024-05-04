import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-monthly-expenses',
  templateUrl: './monthly-expenses.component.html',
  styleUrls: ['./monthly-expenses.component.css']
})
export class MonthlyExpensesComponent implements OnInit {
  public lineChartType: ChartType = 'line';
  public chartTitle = 'Monthly Expenses';

  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          callback: function(tickValue: number | string, index: number, ticks: any[]) {
            return `S/${tickValue}`;
          }
        }
      }
    },
    maintainAspectRatio: true
  };

  lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  lineChartData: ChartDataset<"line", number[]>[] = [
    {
      label: "Monthly Type",
      data: Array.from({length: 12}, () => Math.floor(Math.random() * 100)),
      backgroundColor: "rgba(54,132,235,0.51)",
      borderWidth: 3
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
