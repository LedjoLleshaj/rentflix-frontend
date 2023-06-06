import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmTableComponent } from './film-table.component';

describe('FilmTableComponent', () => {
  let component: FilmTableComponent;
  let fixture: ComponentFixture<FilmTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmTableComponent]
    });
    fixture = TestBed.createComponent(FilmTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
