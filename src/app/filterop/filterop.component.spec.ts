import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteropComponent } from './filterop.component';

describe('FilteropComponent', () => {
  let component: FilteropComponent;
  let fixture: ComponentFixture<FilteropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilteropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
