import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControllerDataComponent } from './controller-data.component';

describe('ControllerDataComponent', () => {
  let component: ControllerDataComponent;
  let fixture: ComponentFixture<ControllerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControllerDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControllerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
