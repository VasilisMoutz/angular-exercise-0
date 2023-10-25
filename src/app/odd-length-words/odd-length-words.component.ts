import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd-length-words',
  templateUrl: './odd-length-words.component.html',
  styleUrls: ['./odd-length-words.component.css']
})
export class OddLengthWordsComponent {
  @Input() oddWord = '';
  oddArray: string[] = [];
  empty: string = 'Empty List'

  ngOnChanges() {
    //If there is any word hide empty
    if (this.oddArray.length > 0) this.empty = ''
    //Push the incoming word
    this.oddArray.push(this.oddWord);
  }
}
