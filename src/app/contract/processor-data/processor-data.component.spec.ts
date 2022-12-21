import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorDataComponent } from './processor-data.component';

describe('ProcessorDataComponent', () => {
  let component: ProcessorDataComponent;
  let fixture: ComponentFixture<ProcessorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessorDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
