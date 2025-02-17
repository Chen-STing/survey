import { Component } from '@angular/core';
import { Route,RouterOutlet } from '@angular/router';
import { TopbarComponent } from './topbar/topbar.component';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TopbarComponent,MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'survey';

}
