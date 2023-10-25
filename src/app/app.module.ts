import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { UserInputComponent } from './user-input/user-input.component';
import { OddLengthWordsComponent } from './odd-length-words/odd-length-words.component';
import { EvenLengthWordsComponent } from './even-length-words/even-length-words.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent,
    OddLengthWordsComponent,
    EvenLengthWordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
