import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exercise-0';
  receivedData: string = "";
  oddWord: string = "";
  evenWord: string = "";

  addItem(newItem: string) {
    if (newItem.length % 2 == 0) {
      this.evenWord = newItem;
    }
    else {
      this.oddWord = newItem;
    }

  }
}
