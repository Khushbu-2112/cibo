import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletspComponent } from './singletsp.component';

describe('SingletspComponent', () => {
  let component: SingletspComponent;
  let fixture: ComponentFixture<SingletspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingletspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
