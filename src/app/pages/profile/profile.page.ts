import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;

  constructor() { }

  doughnutChart: any;

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.doughnutChartMethod();
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Completed', 'Pending', 'Cancelled'],
        datasets: [{
          label: '# of Votes',
          data: [180, 15, 43,],
          backgroundColor: [
            'rgb(47,223,117)',
            'rgb(255,213,52)',
            'rgb(255,73,97)',
          ],
        }]
      },
      options: {
        legend: {
          display: false //This will do the task
        },
        cutoutPercentage: 90,
        elements: {
          arc: {
              borderWidth: 0
          }
        }
      }
    });
  }

}
