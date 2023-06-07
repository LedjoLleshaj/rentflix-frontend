import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmRentDialogComponent } from './film-rent-dialog.component';

describe('FilmRentDialogComponent', () => {
  let component: FilmRentDialogComponent;
  let fixture: ComponentFixture<FilmRentDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmRentDialogComponent]
    });
    fixture = TestBed.createComponent(FilmRentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
