import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-content',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './edit-content.component.html',
  styleUrl: './edit-content.component.scss',
})

export class EditContentComponent{





  // 模板內容
  private _formBuilder = inject(FormBuilder);

  firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
  secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});





  isTrue: boolean = false;


  questionData: Array<any> = [
    {
      id: 1,
      title: "最想去的國家",
      endTime: "2025-02-28"
    },
    {
      id: 2,
      title: "假日喜歡做什麼",
      endTime: "2025-03-02"
    },
    {
      id: 3,
      title: "木柵動物園裡，請挑選出你最喜歡動物的前三名，並且說明一下原因",
      endTime: "2025-03-10"
    },
    {
      id: 4,
      title: "喜歡的影視劇",
      endTime: "2025-03-10"
    },
    {
      id: 5,
      title: "如果你能選擇一位名人，你想成為誰",
      endTime: "2025-03-11"
    },
  ]




}



