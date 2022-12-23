import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCategoryComponent } from './data-category.component';

describe('DataCategoryComponent', () => {
  let component: DataCategoryComponent;
  let fixture: ComponentFixture<DataCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
