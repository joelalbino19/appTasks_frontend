import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-page-routing.module';
import { LoginService } from '../../services/loginServices/login.service';
import { LoginComponent } from './login.component';
    
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent],
    providers: [
        LoginService
    ]
})
export class LoginModule { }
