import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EditContentComponent } from './edit-content/edit-content.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CommonModule } from '@angular/common';
import { BackDirectionsComponent } from './back-directions/back-directions.component';


@Component({
  selector: 'app-content-management',
  standalone: true,
  imports: [RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatTabsModule,
    EditContentComponent,
    FeedbackComponent,
    CommonModule,
    BackDirectionsComponent],
  templateUrl: './content-management.component.html',
  styleUrl: './content-management.component.scss'
})
export class ContentManagementComponent {

  isTrue: boolean = false;

 


}
