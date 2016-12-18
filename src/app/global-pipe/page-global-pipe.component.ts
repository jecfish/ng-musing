import { Component } from '@angular/core';

@Component({
  selector: 'page-global-pipe',
  template: `
  <div class="container">
    <p>My name is <strong>{{ name | capitalize }}</strong>.</p>
  </div>`
})
export class PageGlobalPipeComponent {
  name = 'john doe';
}