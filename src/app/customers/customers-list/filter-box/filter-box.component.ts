import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html'
})

export class FilterBoxComponent implements OnInit{
  private _filter: string;

  @Input() get filter(){
    return this._filter;
  }
  set filter(value: string){
    this._filter = value;
    this.changed.emit(this.filter); // Raise change event

  }
  @Output() changed = new EventEmitter<string>();

  constructor(){}
  ngOnInit() : void{

  }
}
