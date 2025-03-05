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

  questStat: string = "";

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
}
