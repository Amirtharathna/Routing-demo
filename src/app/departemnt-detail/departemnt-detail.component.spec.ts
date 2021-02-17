import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartemntDetailComponent } from './departemnt-detail.component';

describe('DepartemntDetailComponent', () => {
  let component: DepartemntDetailComponent;
  let fixture: ComponentFixture<DepartemntDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartemntDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartemntDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
