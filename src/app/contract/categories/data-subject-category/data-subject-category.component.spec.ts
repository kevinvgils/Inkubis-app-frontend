import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSubjectCategoryComponent } from './data-subject-category.component';

describe('DataSubjectCategoryComponent', () => {
  let component: DataSubjectCategoryComponent;
  let fixture: ComponentFixture<DataSubjectCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSubjectCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSubjectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
