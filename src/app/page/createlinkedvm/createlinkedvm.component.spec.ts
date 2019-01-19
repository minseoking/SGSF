import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelinkedvmComponent } from './createlinkedvm.component';

describe('CreatelinkedvmComponent', () => {
  let component: CreatelinkedvmComponent;
  let fixture: ComponentFixture<CreatelinkedvmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatelinkedvmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatelinkedvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
