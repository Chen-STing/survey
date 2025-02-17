import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MainComponent,CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  isBoolean: boolean = false;

  isBoolCheck() {
    if(this.isBoolean) {
      this.isBoolean = !this.isBoolean;
    }
  }
}
