/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomePage } from './home.page';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../components/table/table.component';

describe('HomeComponent', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        TableComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(HomePage);
    const homeComponent = fixture.componentInstance;
    expect(homeComponent).toBeTruthy();
  });

  it('Validating the variable dataComponent ', () => {
    const fixture = TestBed.createComponent(HomePage);
    const homeComponent = fixture.componentInstance;
    expect(homeComponent.dataComponent).toBeTruthy();
    expect(homeComponent.dataComponent).toEqual([]);
  })

});
