import { Component } from '@angular/core';

@Component({
  selector: 'page-global-pipe',
  template: '<p>My name is <strong>{{ name | capitalize }}</strong>.</p>'
})
export class PageGlobalPipeComponent {
  name = 'john doe';
}