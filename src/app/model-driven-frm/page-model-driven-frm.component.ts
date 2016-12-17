import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from './user.interface';

@Component({
  selector: 'page-model-driven-frm',
  templateUrl: './page-model-driven-frm.component.html'
})
export class PageModelDrivenFrmComponent implements OnInit {
  public myForm: FormGroup;
  public submitted: boolean;
  public events: any[] = [];

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    // the long way
    // this.myForm = new FormGroup({
    //     name: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
    //     address: new FormGroup({
    //         address1: new FormControl('', <any>Validators.required),
    //         postcode: new FormControl('8000')
    //     })
    // });

    // the short way
    this.myForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      address: this._fb.group({
        street: ['', Validators.required],
        postcode: ['8000']
      })
    });

    // subscribe to form changes  
    this.subcribeToFormChanges();

    // Update single value
    this.myForm.controls['name']
      .setValue('John', { onlySelf: true });

    // Update form model
    // const people = {
    // 	name: 'Jane',
    // 	address: {
    // 		street: 'High street',
    // 		postcode: '94043'
    // 	}
    // };

    // this.myForm
    //     .setValue(people, { onlySelf: true });

  }

  subcribeToFormChanges() {
    const myFormStatusChanges$ = this.myForm.statusChanges;
    const myFormValueChanges$ = this.myForm.valueChanges;

    myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  }

  save(model: User, isValid: boolean) {
    this.submitted = true;
    console.log(model, isValid);
  }
}