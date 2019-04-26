import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindingFieldComponent } from './finding-field.component';

describe('FindingFieldComponent', () => {
  let component: FindingFieldComponent;
  let fixture: ComponentFixture<FindingFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindingFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindingFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
