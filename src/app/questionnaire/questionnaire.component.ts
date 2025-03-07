import {Component, inject} from '@angular/core';
import {FormBuilder, Validators, FormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {CommonModule} from '@angular/common';
import { RouterLink } from '@angular/router';

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
    CommonModule,
    RouterLink
  ],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.scss'
})
export class QuestionnaireComponent {

  // 模板
  private _formBuilder = inject(FormBuilder);

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });



  isTrue: boolean = false;

  toggle () {

    this.isTrue = !this.isTrue;
  }

  next () {
    this.arrayData.shift()
  }

  // 評量
  selectStar (e: any) {
    // 先判斷並刪除所有高亮
    let star_two = document.getElementById(e.target.id) as HTMLElement;
    if (star_two.classList.contains('high-star')) {
      for (let i = 1; i <= 5; i++) {
        let str_i = String(i);
        let star = document.getElementById(str_i) as HTMLElement;
        star.classList.remove('high-star');
      }
    }
    // 再添加高亮
    for (let i = 1; i <= e.target.id; i++) {
      let str_i = String(i);
      let star = document.getElementById(str_i) as HTMLElement;
      star.classList.add('high-star');
    }
  }


  arrayData: Array<any> = [
    {
      id: 1,
      title: "貓科動物",
      questStat: "R",
      option: [
        "獅子",
        "老虎",
        "花豹",
        "摺耳貓"
      ]
    },
    {
      id: 18,
      title: "選擇三種你最想成為的動物",
      questStat: "C",
      option: [
        "獅子",
        "老虎",
        "花豹",
        "大象",
        "狐狸",
        "狐蒙",
        "熊貓",
        "長頸鹿",
        "黑猩猩",
        "貓頭鷹",
        "老鷹",
        "海豚",
        "鯨魚",
        "鱷魚"
      ]
    },
    {
      id: 3,
      title: "說明你想成為動物的原因",
      questStat: "T"
    },
    {
      id: 4,
      title: "您推薦木柵動物園嗎？ 推薦指數：",
      questStat: "S",
    }
  ];

}
