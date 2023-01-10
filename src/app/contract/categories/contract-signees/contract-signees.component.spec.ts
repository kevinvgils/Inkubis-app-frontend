import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSigneesComponent } from './contract-signees.component';

describe('ContractSigneesComponent', () => {
  let component: ContractSigneesComponent;
  let fixture: ComponentFixture<ContractSigneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractSigneesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractSigneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
