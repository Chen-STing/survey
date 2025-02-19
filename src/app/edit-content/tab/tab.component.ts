import { MatTabsModule } from '@angular/material/tabs';
import { Component } from '@angular/core';
import { Router,RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [
    MatTabsModule,
    RouterOutlet,
    CommonModule,
    RouterLink
  ],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {

  links = [
    { path: '/edit/add', name: '問卷' },
    { path: '/edit/feedbook', name: '問卷回饋' },
    { path: '/edit/count', name: '統計' },
  ]
  activeLink = this.links[0].name;
  tabPanel!: any;

}
