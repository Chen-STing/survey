import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Chart from 'chart.js/auto';
import { ExampleService } from '../../@services/example.service';


@Component({
  selector: 'app-count',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss'
})
export class CountComponent {

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


