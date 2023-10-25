import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})


export class UserInputComponent {

  newItem: string = "";

  //Create an EventEmitter to send data to app-component
  @Output() newItemEvent = new EventEmitter<string>();

  //Access reference to input
  @ViewChild('newItem') textInputElement: ElementRef | undefined;


  //Sent data to app.Component (parent)
  submitWord() {
    this.newItem = this.textInputElement?.nativeElement.value;
    this.newItemEvent.emit(this.newItem);
  }
}
