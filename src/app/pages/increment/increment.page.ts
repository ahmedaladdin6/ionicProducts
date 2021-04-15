import { Component, OnInit,Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.page.html',
  styleUrls: ['./increment.page.scss'],
})
export class IncrementPage implements OnInit {

  @Output() numberOfItems = new EventEmitter<number>();

  number:number =0
  constructor() { }

  ngOnInit() {
  }
  changeValue(btn){
if(btn == '+'){
 this.number =this.number+1;
 this.numberOfItems.emit(this.number) 
}
else{
  this.number =this.number-1;
  this.numberOfItems.emit(this.number)
}
  }

  onFocusOut(number){
this.numberOfItems.emit(number)
  }
}
