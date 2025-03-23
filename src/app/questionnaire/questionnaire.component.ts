import { log } from 'ng-zorro-antd/core/logger';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzStepsModule } from 'ng-zorro-antd/steps';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    RouterLink,
    NzStepsModule,
    MatButtonModule
  ],
  templateUrl: './questionnaire.component.html',
  styleUrl: './questionnaire.component.scss'
})
export class QuestionnaireComponent {

  current: number = 0;
  showPage: number = 3;
  starCountSave: number = 0;

  collectionUser: Array<any> = [];

  isTrue: boolean = false;

  toggle () {

    this.isTrue = !this.isTrue;
  }



  // 評量
  selectStar (e: any, index: number) {
    // 先判斷並刪除所有高亮
    let star = document.getElementById(e.target.id) as HTMLElement;
    let starCount = e.target.id.substr(2,1)

    if (star.classList.contains('high-star')) {
      for (let i = 1; i <= 5; i++) {
        let starRemove = document.getElementById(index + "-" + i) as HTMLElement;
        starRemove.classList.remove('high-star');
      }
    }

    // 再添加高亮
    for (let i = 1; i <= Number(starCount); i++) {
      let starAdd = document.getElementById(index + "-" + i) as HTMLElement;
      starAdd.classList.add('high-star');
    }

    this.starCountSave = Number(starCount);
  }

  pre(): void {
    this.collectionUser.splice(this.current - 1, 1);
    console.log(this.collectionUser);


    let stepDiv = document.querySelectorAll("nz-step");
    // 進度覽 初始 & 排除最後
    if(this.current > 1 && !(this.showPage == this.arrayData.length)) {
      this.showPage -= 1;
      stepDiv[this.current - 2].classList.remove("hide");
    }
    // 進度覽 當最後一筆時
    if(this.showPage == this.arrayData.length && !(this.current == this.arrayData.length - 1)) {
      this.showPage -= 1;
      stepDiv[this.current - 2].classList.remove("hide");
    }
    this.current -= 1;
    // 問卷內容
    let content = document.querySelectorAll(".question-box");
    content[this.current].classList.remove("hide");
    content[this.current + 1].classList.add("hide");

  }

  next(): void {

    for(let i = this.current; i <= this.current; i++) {
      let quiz = document.querySelectorAll(".quiz" + i + ":checked");
      let text = document.querySelector(".quiz" + i);
      // token判斷能否通行
      let token = quiz.length;

      if((text as HTMLInputElement).value) {
        token = 1;
      }

      if(this.starCountSave > 0) {
        token = 1;
      }

      if(token == 0) {
        (document.querySelector(".warning") as HTMLElement).classList.remove("hide");
        (document.querySelector(".nextSubmit") as HTMLButtonElement).disabled = true;
        return;
      }

      switch(this.arrayData[i].questState) {
        case "單選題":
          let tempEleR = quiz[quiz.length - 1] as HTMLInputElement;
          let userDataR = {
            title: this.arrayData[i].title,
            questState: "單選題",
            answer: tempEleR.value
          }
          this.collectionUser.push(userDataR);
          console.log(this.collectionUser);
          break;
        case "多選題":
          let checklist = [];
          for(let check = 0; check < quiz.length; check++) {
            checklist.push((quiz[check]as HTMLInputElement).value)
          }
          let userDataC = {
            title: this.arrayData[i].title,
            questState: "多選題",
            answerList: checklist
          }
          this.collectionUser.push(userDataC);

          console.log(this.collectionUser);
          break;
        case "文字題":
          let userDataT = {
            title: this.arrayData[i].title,
            questState: "文字題",
            answer: (text as HTMLInputElement).value
          }
          this.collectionUser.push(userDataT);
          console.log(this.collectionUser);
          break;
        case "評量題":
          let userDataS = {
            title: this.arrayData[i].title,
            questState: "評量題",
            answer: this.starCountSave
          }
          this.collectionUser.push(userDataS);
          this.starCountSave = 0;
          console.log(this.collectionUser);
      }
    }

      // 進行下一頁或提交
      this.current += 1;
      let stepDiv = document.querySelectorAll("nz-step");
      // 頁面只顯示 3個進度覽
      if(this.current > 1 && !(this.showPage == this.arrayData.length)) {
        this.showPage += 1;
        stepDiv[this.current - 2].classList.add("hide");
      }
      // 顯示問卷內容
      let content = document.querySelectorAll(".question-box");
      content[this.current].classList.remove("hide");
      content[this.current - 1].classList.add("hide");


  }

  done(): void {
    console.log('done');
  }

  call(): void {
    // 最後一頁時，取消不觸發
    if(this.current == this.arrayData.length - 1) {
      return;
    }
    // 選擇、回答時，解除禁用按鈕
    for(let i = 0; i <= this.current; i++) {
      let quiz = document.querySelectorAll(".quiz" + i + ":checked");
      if(quiz.length > 0) {
        (document.querySelector(".warning") as HTMLElement).classList.add("hide");
        (document.querySelector(".nextSubmit") as HTMLButtonElement).disabled = false;
      }
    }
  }

  // getText() {

  // }

  arrayData: Array<any> = [
    {
      id: 1,
      title: "貓科動物",
      questState: "單選題",
      option: [
        "獅子",
        "老虎",
        "花豹",
        "摺耳貓"
      ]
    },
    {
      id: 2,
      title: "選擇三種你最想成為的動物",
      questState: "多選題",
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
      questState: "文字題"
    },
    {
      id: 4,
      title: "您推薦木柵動物園嗎？ 推薦指數：",
      questState: "評量題",
    },
    {
      id: 5,
      title: "您推薦木柵動物園嗎？ 推薦指數：",
      questState: "評量題",
    },
    {
      id: 6,
      title: "說明你想成為動物的原因",
      questState: "文字題"
    },
    {
      id: 6,
      title: "說明你想成為動物的原因",
      questState: "文字題"
    }
  ];

}
