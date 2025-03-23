import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExampleService } from '../../@services/example.service';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './member.component.html',
  styleUrl: './member.component.scss'
})
export class MemberComponent {

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
