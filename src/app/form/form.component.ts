import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {MatStep, MatStepper, MatStepperNext, MatStepperPrevious} from '@angular/material/stepper';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgForOf,
    MatFormField,
    MatIconButton,
    MatButton,
    MatInput,
    MatError,
    MatLabel,
    NgIf,
    MatStepper,
    MatStep,
    MatStepperNext,
    MatStepperPrevious
  ],
  standalone: true
})
export class FormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      info: this.fb.array([this.createInfoGroup()]),
    });
  }

  get info() {
    return this.myForm.get('info') as FormArray;
  }

  createInfoGroup() {
    return this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  addInfoGroup() {
    this.info.push(this.createInfoGroup());
  }

  removeInfoGroup(index: number) {
    this.info.removeAt(index);
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}
