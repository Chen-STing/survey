import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

  questionData: Array<any> = [
    {
      id: 1,
      name: "小名",
      time: "2025-02-28"
    },
    {
      id: 2,
      name: "書華",
      time: "2025-02-28"
    },
    {
      id: 3,
      name: "大熊",
      time: "2025-02-28"
    },
    {
      id: 4,
      name: "名名",
      time: "2025-02-28"
    },
    {
      id: 5,
      name: "小朱",
      time: "2025-02-28"
    },
    {
      id: 6,
      name: "圈圈",
      time: "2025-02-28"
    },
    {
      id: 7,
      name: "胡華",
      time: "2025-02-28"
    },
    {
      id: 8,
      name: "小熊",
      time: "2025-02-28"
    },
    {
      id: 9,
      name: "阿信",
      time: "2025-02-28"
    },
    {
      id: 10,
      name: "志明",
      time: "2025-02-28"
    },
  ]

}

