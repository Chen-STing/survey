import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {



newStyle: HTMLStyleElement = document.createElement('style');



showShadow() {
  this.newStyle.innerHTML = '.survey-card-container:hover .survey-card {filter: blur(5px); transform: scale(0.7);}';
  document.head.appendChild(this.newStyle);
};



closeShadow() {
  document.head.removeChild(this.newStyle);
}

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log(this.newStyle);

}

}
