import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { By } from '@angular/platform-browser';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render input filter', (() => {
    let fixture = TestBed.createComponent(TableComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let input = fixture.debugElement.query(By.css('input'));
      let el = input.nativeElement;
      let user = { name: 'peeskillet' };
      expect(el.value).toBe('peeskillet');

      el.value = 'someValue';
      el.dispatchEvent(new Event('input'));

      expect(user.name).toBe('someValue');
    });
  }));

});