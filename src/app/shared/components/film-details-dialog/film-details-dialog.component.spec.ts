import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmDetailsDialogComponent } from './film-details-dialog.component';

describe('DialogComponent', () => {
  let component: FilmDetailsDialogComponent;
  let fixture: ComponentFixture<FilmDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(FilmDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
