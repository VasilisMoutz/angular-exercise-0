import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even-length-words',
  templateUrl: './even-length-words.component.html',
  styleUrls: ['./even-length-words.component.css']
})
export class EvenLengthWordsComponent {
  @Input() evenWord = '';
  evenArray: string[] = [];
  empty: string = 'Empty List'

  ngOnChanges() {
    //If there is any word hide empty
    if (this.evenArray.length > 0) this.empty = ''
    //Push the incoming word
    this.evenArray.push(this.evenWord);
  }
}
