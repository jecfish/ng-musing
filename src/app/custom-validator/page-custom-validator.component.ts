import { Component } from '@angular/core';
import { User } from './user.interface';

@Component({
  selector: 'page-custom-validator',
  templateUrl: './page-custom-validator.component.html'
})
export class PageCustomValidatorComponent {
  public user: User;

  ngOnInit() {
    this.user = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  save(model: User, isValid: boolean) {
    // call API to save customer
    console.log(model, isValid);
  }
}