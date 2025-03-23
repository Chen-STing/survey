import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';

@Component({
  selector: 'app-edit-adding',
  standalone: true,
  imports: [RouterLink,NzDividerModule,FormsModule,NzBackTopModule],
  templateUrl: './edit-adding.component.html',
  styleUrl: './edit-adding.component.scss'
})
export class EditAddingComponent {

  quizArray: Array<any> = [];

  // 選項狀態識別
  questState: string = "";

  // 選項識別
  selectQuestStat (numberState :number) {
    switch (numberState) {
      case 1:
        this.questState = "單選題";
        break;
      case 2:
        this.questState = "多選題";
        break;
      case 3:
        this.questState = "文字題";
        break;
      case 4:
        this.questState = "評量題";
        break;
    }
  }

  // 新增問卷
  addQuiz(numberStat :number) {
    this.selectQuestStat(numberStat);
    let state = this.questState;
    let quiz = {
      title: "",
      state: state,
      option: [],
    };
    this.quizArray.push(quiz);

  }

  // 刪除問卷
  deleteQuiz(TitIndex: number) {
    this.quizArray.splice(TitIndex, 1);

  }

  // 刪除選項
  deleteQuizOption(TitIndex: number, OptIndex: number) {
    this.quizArray[TitIndex].option.splice(OptIndex, 1);

  }

  // 新增問卷的選項
  addOption(TitIndex: number) {
    this.quizArray[TitIndex].option.push("");
  }

  // 修改題目標題
  changeTitle(index: number) {
    let title = document.querySelectorAll(".quiz-title") as NodeListOf<HTMLInputElement>;
    this.quizArray[index].title = title[index].value;
  }

  // 修改題目選項
  changeOption(TitIndex: number, OptIndex: number) {
    let option = document.querySelectorAll(".quiz" + TitIndex +  " .quiz-option") as NodeListOf<HTMLInputElement>;
    this.quizArray[TitIndex].option[OptIndex] = option[OptIndex].value;
  }



  // 儲存&發布
  completeQuiz() {
    console.log(this.quizArray);

  }

}


