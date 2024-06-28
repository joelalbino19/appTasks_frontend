/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableComponent } from '../../../components/table/table.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const homeComponent = fixture.componentInstance;
    expect(homeComponent).toBeTruthy();
  });

  it('Validating the variable dataComponent ', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    const homeComponent = fixture.componentInstance;
    expect(homeComponent.dataComponent).toBeTruthy();
    expect(homeComponent.dataComponent).toEqual([]);
  })

});
