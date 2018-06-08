import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './html-controls.component.html',

})
export class HtmlControlsComponent {

  form: FormGroup;

  title = 'app';
  options = [
    {
      id: 1,
      name: 'Single'
    },
    {
      id: 2,
      name: 'Maried'
    }
  ];

  technologies = [
    new Technology(100, 'Java'),
    new Technology(101, 'Angular'),
    new Technology(102, 'Hibernate'),
    new Technology(103, 'Spring')
  ];

  constructor(fb: FormBuilder) {

    this.form = fb.group({
      state: [null, Validators.required],
      firstTime: [false, Validators.requiredTrue],
      name: ['', Validators.required],
      color: [null, Validators.required],
      selectedTechnologies: [[], Validators.required]
    });
  }

  show() {
    console.log(this.form.getRawValue());
    this.form.reset({
      state: null,
      firstTime: false,
      name: '',
      color: null,
      selectedTechnologies: []
    });
  }
}

export class Technology {
  constructor(public techId: number, public techName: string) { }
} 