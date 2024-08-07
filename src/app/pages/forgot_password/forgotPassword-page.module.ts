import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { forgotPasswordRoutingModule } from './forgotPassword-page-routing.module';
import { LoginService } from '../../services/loginServices/login.service';
import { ForgotPasswordComponent } from './forgotPassword.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        forgotPasswordRoutingModule
    ],
    declarations: [ForgotPasswordComponent],
    providers: [
        LoginService
    ]
})
export class forgotPasswordModule { }
