import { Component } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'page-template-driven-frm',
  templateUrl: './page-template-driven-frm.component.html'
})
export class PageTemplateDrivenFrmComponent {
  public user: User;
  
  ngOnInit() {
    this.user = {
      name: '',
        address: {
         street: '',
         postcode: '8000'
      }
    };
  }
  
  save(model: User, isValid: boolean) {
    console.log(model, isValid);
  }
}