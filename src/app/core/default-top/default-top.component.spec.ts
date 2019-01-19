import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTopComponent } from './default-top.component';

describe('DefaultTopComponent', () => {
  let component: DefaultTopComponent;
  let fixture: ComponentFixture<DefaultTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
