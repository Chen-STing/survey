import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-adding',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './edit-adding.component.html',
  styleUrl: './edit-adding.component.scss'
})
export class EditAddingComponent {

  // 選項狀態識別
  questStat: string = "";

  // 選項識別
  selectQuestStat (numberStat :number) {
    switch (numberStat) {
      case 1:
        this.questStat = "R";
        break;
      case 2:
        this.questStat = "C";
        break;
      case 3:
        this.questStat = "T";
        break;
      case 4:
        this.questStat = "A";
        break;
    }
  }

  // 新增單選題
  createRadio () {
    // 使用 as HTMLElemen 強制轉換類型
    let radioBox = document.getElementById('radio-box') as HTMLElement;


    radioBox.innerHTML += '<i _ngcontent-ng-c2552335061="" class="bx bx-radio-circle"></i><input _ngcontent-ng-c2552335061="" type="text" placeholder="問題選項" class="input is-warning"><i _ngcontent-ng-c2552335061="" class="bx bx-no-entry"></i><br _ngcontent-ng-c2552335061="">'
  }

  // 新增多選題
  createCheck () {
    let checkBox = document.getElementById('check-box') as HTMLElement;
    console.log(checkBox.innerHTML);

    checkBox.innerHTML += '<i _ngcontent-ng-c2552335061="" class="bx bx-checkbox"></i><input _ngcontent-ng-c2552335061="" type="text" placeholder="問題選項" class="input is-warning"><i _ngcontent-ng-c2552335061="" class="bx bx-no-entry"></i><br _ngcontent-ng-c2552335061="">'
  }

  remove (e: any) {
    console.log(e.target);

  }


}


