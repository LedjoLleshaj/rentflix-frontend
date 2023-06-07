import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Film } from 'src/app/graphql/film';

import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-film-rent-dialog',
  templateUrl: './film-rent-dialog.component.html',
  styleUrls: ['./film-rent-dialog.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class FilmRentDialogComponent {

  selectedStore?: number;
  rentalDate?: Date;

  constructor(
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<FilmRentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public film: Film,
  ) { }
}
