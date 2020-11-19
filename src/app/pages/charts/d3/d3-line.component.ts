import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-d3-line',
  template: `
    <ngx-charts-line-chart
      [scheme]="colorScheme"
      [results]="multi"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-line-chart>
  `,
})
export class D3LineComponent implements OnDestroy {
  multi = [
    {
      name: 'Bangalore',
      series: [
        {
          name: '2019',
          value: 73,
        },
        {
          name: '2020',
          value: 89,
        },
      ],
    },
    {
      name: 'Mumbai',
      series: [
        {
          name: '2019',
          value: 78,
        },
        {
          name: '2020',
          value: 82,
        },
      ],
    },
    {
      name: 'Thane',
      series: [
        {
          name: '2019',
          value: 50,
        },
        {
          name: '2020',
          value: 58,
        },
      ],
    },
  ];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'City';
  showYAxisLabel = true;
  yAxisLabel = 'Locations';
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
