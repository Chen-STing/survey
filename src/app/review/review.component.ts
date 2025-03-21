import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [NzDividerModule,RouterLink],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  
  questObj: questObj = {
      title: "木柵動物園裡，請挑選出你最喜歡動物的前三名，並且說明一下原因",
      userName: "黃曉明",
      userAge: 36,
      userGender: "男",
      questions:[
        {
          questionTitle: "貓科動物",
          response: "老虎"
        },
        {
          questionTitle: "選擇三種你最想成為的動物",
          responseList:[
            "獅子","鯨魚","貓頭鷹"
          ] 
        },
        {
          questionTitle: "說明你想成為動物的原因",
          response: "無拘無束、自由自在的生活"
        },
        {
          questionTitle: "您推薦木柵動物園嗎？ 推薦指數：",
          star: 4
        },
      ]
    }
  
}

interface questObj {
  title: string;
  userName: string;
  userAge: number;
  userGender: string;
  questions: questions[];
}

interface questions {
  questionTitle: string;
  response?: string;
  responseList?: string[];
  star?: number;
}