import { Component, OnInit,Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.css']
})
export class InsideComponent implements OnInit {
  public binding = "";
 public color = ["red", "blue","green","orange"];
 public property = "Red";
 public name = "welcome to this page";
 public sName = "aSaqiba";
 public piping = {

  firstName : "Muhammad",
  lastName : "Saqib"
 } 
 public date = new Date();
 @Input() public parentData;
@Output() public childEvent = new EventEmitter(); /* instence of event emitter class */

  constructor() { } /* this will give the instence of EmployeeServeice*/
 /* make use of service instence to fetch the employee data */
  ngOnInit() {
  }
  event()
  {
    this.childEvent.emit('Visual Studio Code');
  }

}
