import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component  {
@Output() messageSend = new EventEmitter <String>();

SendMessage (){
  this.messageSend.emit("This message is Send from child1");
}
}
