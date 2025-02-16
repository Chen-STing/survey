import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  styleSheets = document.styleSheets[0];
  showShadow() {
    this.styleSheets.insertRule(`
      .survey-card-container:hover .survey-card{
      filter: blur(5px);
      transform: scale(0.7);
    }`, 0);
  }
  closeShadow() {
    this.styleSheets.deleteRule(0)
  }
}
