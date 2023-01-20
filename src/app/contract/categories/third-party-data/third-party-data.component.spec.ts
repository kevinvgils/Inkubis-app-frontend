import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyDataComponent } from './third-party-data.component';

describe('ThirdPartyDataComponent', () => {
  let component: ThirdPartyDataComponent;
  let fixture: ComponentFixture<ThirdPartyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPartyDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdPartyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
