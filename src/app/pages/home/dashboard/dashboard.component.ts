import { Component } from '@angular/core';
import { ChartPieComponent } from '../../../components/chart-pie/chart-pie.component';
import { Router } from '@angular/router';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { LocalStorageService } from '../../../services/localStorage.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ChartPieComponent, ButtonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {

  }
  ngOnInit(): void {

  }
  viewList() {
    this.router.navigate(['/home']);
    this.localStorageService.removeItem('countUser');
  }
}
