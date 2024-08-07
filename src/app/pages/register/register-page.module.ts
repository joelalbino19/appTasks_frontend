import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-page-routing.module';
import { LoginService } from '../../services/loginServices/login.service';
import { RegisterComponent } from './register.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RegisterRoutingModule
    ],
    declarations: [RegisterComponent],
    providers: [
        LoginService
    ]
})
export class RegisterModule { }
