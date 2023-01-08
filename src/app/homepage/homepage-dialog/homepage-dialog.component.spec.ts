import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageDialogComponent } from './homepage-dialog.component';

describe('HomepageDialogComponent', () => {
  let component: HomepageDialogComponent;
  let fixture: ComponentFixture<HomepageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
