import { NgModule } from '@angular/core';
import { HomePage } from './home.page';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-page-routing.module';
import { TableComponent } from '../../components/table/table.component';
import { HttpService } from '../../services/http.service';
import { ChartPieComponent } from '../../components/chart-pie/chart-pie.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        TableComponent,
        ChartPieComponent,
        ButtonModule
    ],
    declarations: [HomePage],
    providers: [HttpService]
})
export class HomeModule { }
