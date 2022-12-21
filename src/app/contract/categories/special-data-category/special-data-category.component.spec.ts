import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialDataCategoryComponent } from './special-data-category.component';

describe('SpecialDataCategoryComponent', () => {
  let component: SpecialDataCategoryComponent;
  let fixture: ComponentFixture<SpecialDataCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialDataCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialDataCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
