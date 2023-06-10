import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @Output() public sData = new EventEmitter<string>();

  ngOnInit()
  {
    
  }

  showText()
  {
    this.sData.emit("This is child data");
  }


}
