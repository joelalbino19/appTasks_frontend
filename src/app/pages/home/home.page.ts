import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { userInterface } from '../../shared/interface/userInterface';
import { LocalStorageService } from '../../services/localStorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  dataComponent: userInterface[] = [];

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
  }
}
