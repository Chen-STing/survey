import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  isBoolean: boolean = false;
  inputData: string = '';


  newStyle: HTMLStyleElement = document.createElement('style');



  showShadow() {
    this.newStyle.innerHTML = '.survey-card-container:hover .survey-card {filter: blur(5px); transform: scale(0.7);}';
    document.head.appendChild(this.newStyle);
  };



  closeShadow() {
    document.head.removeChild(this.newStyle);
  }



  isBoolCheck() {
    if(this.isBoolean) {
      this.isBoolean = !this.isBoolean;
    }
  }

  // changeInput(event: Event) {
  //   let tidyData: PeriodicElement[] = [];
  //   console.log((event.target as HTMLInputElement).value);
  //   for (let data of this.questionData) {
  //     if (data.title.indexOf((event.target as HTMLInputElement).value) != -1) {
  //       tidyData.push(data);
  //       this.questionData = tidyData;
  //     }
  //   }
  // }

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
    {
      id: 6,
      title: "如果你能變成動物，你想變成什麼動物?",
      endTime: "2025-02-28"
    },
    {
      id: 7,
      title: "假日喜歡做什麼",
      endTime: "2025-03-02"
    },
    {
      id: 8,
      title: "木柵動物園裡，請挑選出你最喜歡動物的前三名，並且說明一下原因",
      endTime: "2025-03-10"
    },
    {
      id: 9,
      title: "喜歡的影視劇",
      endTime: "2025-03-10"
    },
    {
      id: 10,
      title: "如果你能選擇一位名人，你想成為誰",
      endTime: "2025-03-11"
    }
  ]



}
