import {Component, inject} from '@angular/core';
import {FormBuilder, Validators, FormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
  imports: [
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.scss'
})
export class QuestionnaireComponent {

  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  isTrue: boolean = false;

  toggle () {

    this.isTrue = true;
  }

  next () {
    this.arrayData.shift()
  }

  arrayData: Array<any> = [
    {
      id: 1,
      title: "第一個"
    },
    {
      id: 18,
      title: "第二個"
    },
    {
      id: 1,
      title: "p"
    },
    {
      id: 4,
      title: "f"
    }
  ];

}
