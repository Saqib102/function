import { Component, OnInit,Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.css']
})
export class InsideComponent implements OnInit {
 public color = ["red", "blue","green","orange"];
 public property = "Red";
 public name = "welcomr to angular";
 public sName = "aSaqiba";
 @Input() public parentData;
@Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  event()
  {
    this.childEvent.emit('Visual Studio Code');
  }

}
