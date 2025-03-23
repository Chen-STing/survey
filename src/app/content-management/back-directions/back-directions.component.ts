import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExampleService } from '../../@services/example.service';

@Component({
  selector: 'app-back-directions',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule],
  templateUrl: './back-directions.component.html',
  styleUrl: './back-directions.component.scss'
})
export class BackDirectionsComponent {

constructor(
  private exampleService: ExampleService,
) {};

isdarkMode!: boolean;

ngDoCheck(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.isdarkMode = this.exampleService.isdarkMode;

}
}
