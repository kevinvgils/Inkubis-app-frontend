import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProcessingPurposesComponent } from './data-processing-purposes.component';

describe('DataProcessingPurposesComponent', () => {
  let component: DataProcessingPurposesComponent;
  let fixture: ComponentFixture<DataProcessingPurposesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataProcessingPurposesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataProcessingPurposesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
