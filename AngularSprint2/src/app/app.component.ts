import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'heros';

  
  showMarvel: boolean = true;
  showDc: boolean = true;

  toggleButton(){
    
    this.showMarvel = !this.showDc;
    this.showDc = !this.showMarvel;
  }

}
