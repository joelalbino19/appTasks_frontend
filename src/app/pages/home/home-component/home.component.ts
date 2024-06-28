import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { userInterface } from '../../../shared/interface/userInterface';
import { LocalStorageService } from '../../../services/localStorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataComponent: userInterface[] = [];

  constructor(
    private httpService: HttpService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.fnGetUsers();

  }

  fnGetUsers() {
    this.httpService.getUsersApi().subscribe(
      data => {

        if (data) {
          this.localStorageService.setItem('users', JSON.stringify(data));
          this.dataComponent = data;
        }
      }
    )
  }
}
