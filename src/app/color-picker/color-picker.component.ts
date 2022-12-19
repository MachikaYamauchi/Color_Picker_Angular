import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {

  constructor() {

   }
  color:string;
  event = new EventEmitter();

  public defaultColors: string[] = [
    '#c97545',
    '#c1800b',
    '#f0b89a',
    '#9d8594',
    '#dad0d8',
    '#f0ca68',
    '#8e0622',
    '#f0b89a',
    '#f0ca68',
    '#3f7a89',
  ];

  public changeColor(color:string) {
    this.color = color;
    this.event.emit(this.color);
  }

  ngOnInit(): void {
  }

}
