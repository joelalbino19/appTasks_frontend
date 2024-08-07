import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginService } from '../../services/loginServices/login.service';
import { NotificationService } from '../../services/message.service';
import { LocalStorageService } from '../../services/localStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  iconPassword: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private renderer: Renderer2
  ) {
    this.formLogin = formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
    this.iconPassword = false;
  }

  fnLogin() {
    if (this.formLogin.invalid) return this.notificationService.showWarning('Por favor completar el formulario', 'Formulario Invalido');
    this.loginService.serLogin(this.formLogin.value).then((response) => {
      console.log(response);
      this.localStorageService.setItem('token', response.token)
      this.router.navigate(['/home'])
    }).catch((err) => {
      // throw error;
      if (err.status == 400) {
        this.notificationService.showWarning(err.error.message, "Login")
      }
    });
  }

  validToken() {
    let token = this.localStorageService.getItem('token');
    if (token !== null) {
      this.router.navigate(['/home'])
      this.notificationService.showSuccess("Token valido", "Validación de token")
      return;
    }
  }


  viewPassword(type: string) {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const inputPassword = document.getElementById('password');
      this.renderer.setAttribute(inputPassword, 'type', type);
      this.iconPassword = !this.iconPassword;
    }
  }
  
  ngOnInit() {
    this.validToken();
  }
}
