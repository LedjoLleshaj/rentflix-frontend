import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalDetailsDialogComponent } from './rental-details-dialog.component';

describe('DialogComponent', () => {
  let component: RentalDetailsDialogComponent;
  let fixture: ComponentFixture<RentalDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentalDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(RentalDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
