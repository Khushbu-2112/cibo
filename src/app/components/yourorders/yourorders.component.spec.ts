import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourordersComponent } from './yourorders.component';

describe('YourordersComponent', () => {
  let component: YourordersComponent;
  let fixture: ComponentFixture<YourordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
