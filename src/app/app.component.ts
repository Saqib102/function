import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = "Data is coming from App Component to the child component.";
  public Message = "";

ngOnInit()
{

}

}

