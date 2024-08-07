import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeModule } from './pages/home/home-page.module';
import { LoginModule } from './pages/login/login-page.module';
import { LocalStorageService } from './services/localStorage.service';
import { LoginService } from './services/loginServices/login.service';
import { NotificationService } from './services/message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //paginas
    HomeModule,
    LoginModule,

    //libreias
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'appTasks';

  constructor(
    private localStorageService: LocalStorageService,
    private notificationService: NotificationService,
    private router: Router
  ) { }

  validToken() {
    let token = this.localStorageService.getItem('token');
    if (token !== null || undefined) {
      this.router.navigate(['/home'])
      this.notificationService.showSuccess("Token valido", "Validación de token")
      return;
    }
    this.router.navigate(['/login']);
    return;
  }

  ngOnInit(): void {
    this.validToken();
  }
}
