

import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { DataManager } from '@syncfusion/ej2-data';
import { GridComponent, GridModule, PageService, PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { userInterface } from '../../shared/interface/userInterface';
import { Router } from '@angular/router';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { LocalStorageService } from '../../services/localStorage.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [PageService],
  standalone: true,
  imports: [GridModule, ReactiveFormsModule, ButtonModule]
})
export class TableComponent implements OnInit {
  public dataTable!: DataManager;
  @Input() dataComponent!: userInterface[];

  @ViewChild('grid')
  public grid!: GridComponent;

  public initialPage?: PageSettingsModel;
  public freightrules!: Object;
  inputFilter!: FormControl;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {

  }
  ngOnInit(): void {
    this.inputFilter = new FormControl('')
    this.initialPage = { pageSizes: true, pageSize: 5, pageCount: 1 };
    this.freightrules = { required: true, min: 0 };
    this.setData();

  }

  setData() {
    if (this.dataComponent) {
      let data: any = [];

      if (this.dataComponent.length == 0) {
        let dataLocalStorage = this.localStorageService.getItem('users')
        if (dataLocalStorage) {
          this.dataComponent = JSON.parse(dataLocalStorage)
        }
      }

      for (let i = 0; i < this.dataComponent.length; i++) {
        const element = this.dataComponent[i];
        data.push({
          id: element.id,
          name: element.name,
          address: element.address.street + ' ' + element.address.suite,
          email: element.email,
          website: element.website
        })
      }

      this.dataTable = data;
    }
  }

  filterData(): void {
    if (this.inputFilter.value.length >= 3) {
      this.inputFilter.valueChanges.subscribe(value => {
        let dataFilter = this.filterItems(value);
        let newData: any = [];
        for (let i = 0; i < dataFilter.length; i++) {
          const element = dataFilter[i];
          newData.push({
            id: element.id,
            name: element.name,
            address: element.address.street + ' ' + element.address.suite,
            email: element.email,
            website: element.website
          })
        }
        this.dataTable = newData;
      });
    } else {
      return;
    }
  }

  filterItems(query: string) {
    if (!query || query.length < 1) {
      return this.dataComponent;
    }
    return this.dataComponent.filter((item: any) => item.name.toLowerCase().includes(query.toLowerCase()));
  }

  viewGrafic() {
    this.router.navigate(['/dashboard']);
    this.localStorageService.setItem('countUser', JSON.stringify(this.dataComponent.length))
  }

}
