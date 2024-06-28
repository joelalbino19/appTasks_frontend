import { NgModule } from '@angular/core';
import { HomeComponent } from './home-component/home.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-page-routing.module';
import { TableComponent } from '../../components/table/table.component';
import { HttpService } from '../../services/http.service';
import { ChartPieComponent } from '../../components/chart-pie/chart-pie.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        TableComponent,
        ChartPieComponent,
        DashboardComponent,
        ButtonModule
    ],
    declarations: [HomeComponent],
    providers: [HttpService]
})
export class HomeModule { }
