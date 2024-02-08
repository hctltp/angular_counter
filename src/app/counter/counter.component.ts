import { Component,EventEmitter,Input,NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
 
  /* text: string = "";
  charactercount: number = 0;
  wordCount: number = 0;

  countCharactersAndWords(ev: any) {
    this.text = ev.target.value;
    this.charactercount = this.text.length;
    const words = this.text.trim().split(/\s+/);
    this.wordCount = words.length;
  }

  doTextareaValueChange(ev: any) {
    try {
      this.text = ev.target.value;
    } catch(e) {
      console.info('could not set textarea-value');
    }
  } */

  @Input() text: string = '';
  //@Output() characterCountChange = new EventEmitter<number>();
  //@Output() wordCountChange = new EventEmitter<number>();

  characterCount = 0;
  wordCount = 0;

  updateCounts() {
    this.characterCount = this.text.trim().length;
    this.wordCount = this.text.trim().split(/\s+/).filter(word => word).length;
    //this.characterCountChange.emit(this.characterCount);
    //this.wordCountChange.emit(this.wordCount);
  }

}
