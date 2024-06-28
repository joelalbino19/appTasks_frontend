import { Component } from '@angular/core';
import { AccumulationChartAllModule, AccumulationTheme, ChartAllModule, IAccLoadedEventArgs } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
import { LocalStorageService } from '../../services/localStorage.service';

@Component({
  selector: 'app-chart-pie',
  standalone: true,
  imports: [AccumulationChartAllModule, ChartAllModule],
  templateUrl: './chart-pie.component.html',
  styleUrl: './chart-pie.component.scss'
})
export class ChartPieComponent {
  countUsers: number = 0;

  public data: Object[] = [];
  //Initializing Legend
  public legendSettings: Object = {
    visible: false,
  };
  //Initializing Datalabel
  public dataLabel: Object = {
    visible: true,
    position: 'Outside', name: 'DataLabelMappingName',
    font: {
      fontWeight: '600'
    },
    connectorStyle: { length: '20px', type: 'Curve' },

  };

  // custom code start
  public load(args: IAccLoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.accumulation.theme = <AccumulationTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
  };
  // custom code end
  public startAngle: number = Browser.isDevice ? 55 : 35;
  public radius: string = Browser.isDevice ? '40%' : '70%'
  public explode: boolean = true;
  public enableAnimation: boolean = true;
  public tooltip: Object = {
    enable: true,
    header: '',

  };

  public title: string = 'Total de Usuarios Registrados';
  
  constructor(private localStorageService: LocalStorageService) {
    let user = this.localStorageService.getItem('countUser');
    if (user) {
      this.countUsers = parseInt(user);
    }
    this.data.push({ Browser: "Usuarios", Users: this.countUsers, DataLabelMappingName:  `Usuarios: ${this.countUsers}` })
  };
}
