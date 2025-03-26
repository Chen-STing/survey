import { ExampleService } from '../@services/example.service';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EditContentComponent } from './edit-content/edit-content.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CommonModule } from '@angular/common';
import { BackDirectionsComponent } from './back-directions/back-directions.component';
import { MemberComponent } from './member/member.component';




@Component({
  selector: 'app-content-management',
  standalone: true,
  imports: [RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatTabsModule,
    EditContentComponent,
    FeedbackComponent,
    MemberComponent,
    CommonModule,
    BackDirectionsComponent,

    ],
  templateUrl: './content-management.component.html',
  styleUrl: './content-management.component.scss'
})
export class ContentManagementComponent {

  isTrue: boolean = false;
  isdarkMode: boolean = false;


  constructor(
    private exampleService: ExampleService,
  ) {};

  ngDoCheck(): void {

    this.exampleService.isdarkMode = this.isdarkMode;

  }

  functionTitle: string = "";

  showRouterTitle(e: number) {
    switch(e) {
      case 1:
        this.functionTitle = "我的問卷";
        break;
      case 2:
        this.functionTitle = "問卷回饋";
        break;
      case 3:
        this.functionTitle = "問卷統計";
        break;
      case 4:
        this.functionTitle = "會員管理";
        break;
      default:
        this.functionTitle = "";
    }
  }



}
