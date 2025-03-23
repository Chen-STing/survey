import { Component } from '@angular/core';
import { ExampleService } from '../../@services/example.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

  constructor(
      private exampleService: ExampleService,
    ) {};

    isdarkMode!: boolean;

  ngDoCheck(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isdarkMode = this.exampleService.isdarkMode;

  }

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

