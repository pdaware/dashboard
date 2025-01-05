import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { CommonServiceService } from '../../../utlity/services/common-service.service';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { FormsModule, NgModel } from '@angular/forms';



@Component({
  selector: 'app-dashboard-home',
  imports: [NgFor, NgStyle, NgClass, BaseChartDirective, FormsModule, NgIf],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.scss'
})
export class DashboardHomeComponent implements OnInit {

  userDetails: any;
  learningTime: any;
  latestResults: any[] = [];
  yourCourse: any[] = [
    {
      code: 'B2',
      name: 'Business English',
      type: 'Grammar',
    },
    {
      code: 'B2',
      name: 'Common English',
      type: 'Phrasal Verbs',
    },
    {
      code: 'C1',
      name: 'Business Spanish',
      type: 'Vocabulary',
    },
  ];

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartDataWeekly: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      // {
      //   data: [65, 59, 80, 81, 56, 55, 40],
      //   label: 'Series A',
      //   borderRadius: 5,
      //   borderWidth: 0.1,
      //   barPercentage: 0.1,
      //   grouped: true,

      // },
      // {
      //   data: [28, 48, 40, 19, 86, 27, 90],
      //   label: 'Series B',
      //   borderRadius: 5,
      //   borderWidth: 0.1,
      //   barPercentage: 0.1,
      //   grouped: true
      // }
    ]
  };

  public barChartDataMonthly: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: []
  }

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }

    },

  };

  graphSelectedVale: string = 'last_week';
  isLast_week: boolean = true;


  constructor(
    private cs: CommonServiceService,
  ) {

  }

  ngOnInit(): void {
    this.userDetails = this.cs.userDetails;
    this.latestResults = this.cs.latestResults;
    this.learningTime = this.cs.learningTime;
    this.setBarData();

  }

  onValueChange() {
    this.isLast_week = !this.isLast_week;
  }

  setBarData() {
    const grammar: any = [];
    const listening: any = [];
    const vocabulary: any = [];
    const writing: any = [];
    for (let key in this.learningTime.weekly) {
      this.barChartDataWeekly.labels?.push(key.slice(0, 3).toUpperCase());
      Object.keys(this.learningTime.weekly[key]).forEach((x) => {
        switch (x) {
          case 'grammar':
            grammar.push(this.learningTime.weekly[key][x])
            break;
          case 'listening':
            listening.push(this.learningTime.weekly[key][x])
            break;
          case 'vocabulary':
            vocabulary.push(this.learningTime.weekly[key][x])
            break;
          case 'writing':
            writing.push(this.learningTime.weekly[key][x])
            break;

          default:
            break;
        }
      });
    }
    let DataArray = [{ label: 'grammar', name: grammar }, { label: 'Listening', name: listening }, { label: 'Vocabulary', name: vocabulary }, { label: 'Writing', name: writing }];
    for (let i = 0; i < DataArray.length; i++) {
      const obj = {
        data: DataArray[i].name,
        label: DataArray[i].label,
        borderRadius: 5,
        borderWidth: 0.1,
        barPercentage: 0.1,
        grouped: true
      }
      this.barChartDataWeekly.datasets.push(obj);

    }

    if (!!this.learningTime.monthly) {
      const grammar: any = [];
      const listening: any = [];
      const vocabulary: any = [];
      const writing: any = [];
      let DataArray = [{ label: 'grammar', name: grammar }, { label: 'Listening', name: listening }, { label: 'Vocabulary', name: vocabulary }, { label: 'Writing', name: writing }];
      // for (let key in this.learningTime.monthly) {
      this.barChartDataMonthly.labels?.push('Month');
      Object.keys(this.learningTime.monthly).forEach((x) => {
        switch (x) {
          case 'grammar':
            grammar.push(this.learningTime.monthly[x])
            break;
          case 'listening':
            listening.push(this.learningTime.monthly[x])
            break;
          case 'vocabulary':
            vocabulary.push(this.learningTime.monthly[x])
            break;
          case 'writing':
            writing.push(this.learningTime.monthly[x])
            break;

          default:
            break;
        }
      });
      // }

      for (let i = 0; i < DataArray.length; i++) {
        const obj_m = {
          data: DataArray[i].name,
          label: DataArray[i].label,
          borderRadius: 5,
          borderWidth: 0.1,
          barPercentage: 0.1,
          grouped: true
        }
        this.barChartDataMonthly.datasets.push(obj_m);

      }
    }




  }

}
