import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePointOfContactDataComponent } from './single-point-of-contact-data.component';

describe('SinglePointOfContactDataComponent', () => {
  let component: SinglePointOfContactDataComponent;
  let fixture: ComponentFixture<SinglePointOfContactDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePointOfContactDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePointOfContactDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
