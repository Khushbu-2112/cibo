import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindailogComponent } from './logindailog.component';

describe('LogindailogComponent', () => {
  let component: LogindailogComponent;
  let fixture: ComponentFixture<LogindailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogindailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
