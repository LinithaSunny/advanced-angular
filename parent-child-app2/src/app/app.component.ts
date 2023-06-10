import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent-child-app2';

  parentItems = ['Item 1', 'Item 2', 'Item 3'];
  
    onChildEvent(newItem: string) {
      this.parentItems.push(newItem);
    }
}
