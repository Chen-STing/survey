import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MainComponent,CommonModule,RouterLink],
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
