import { Component } from '@angular/core';

@Component({
  selector: 'page-component-inheritance',
  templateUrl: './page-component-inheritance.component.html'
})
export class PageComponentInheritanceComponent {
  messages: string[] = [];
  
  gatherCount(message) {
    this.messages.push(message);
  }
  
  gatherPage(pageNo) {
    this.messages.push(`I am at page ${pageNo} now.`);
  }
}