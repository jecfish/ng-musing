import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Customer } from './customer.interface';

@Component({
    selector: 'page-form-array-dyn-val',
    templateUrl: './page-form-array-dyn-val.component.html'
})
export class PageFormArrayDynValComponent implements OnInit {
    public myForm: FormGroup;

    formErrors = {}; // expected format = { name: 'error message' }
    addressesErrors = {}; // expected format = { 0: { street: 'error message' } }

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['111', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });

        this.myForm.valueChanges.subscribe(x => this.onValChanges(x));

        // HACK: trigger value changes immediately
        this.myForm.patchValue({});
    }

    onValChanges(data) {
        if (!this.myForm) return;

        // handle main form errors
        this.onFormValueChanged();
    }

    /* Update Main Form Validations */
    onFormValueChanged() {
        const custF = this.myForm;

        // setup fields to validate and the messages
        const fields = { 
            name: '', 
            addresses: {
                $each: {
                    street: ''
                }
            } 
        };
        const validationMessages = {
            name: {
                required: 'it is required',
                minlength: 'must be more than 5'
            },
            addresses: {
                $each: {
                    street: {
                        required: 'my god',
                        minlength: 'must be more than 5'
                    }
                }
            }
        };

        const re = this.handleValidations(fields, validationMessages, custF);
        this.formErrors = Object.assign(this.formErrors, re);
    }

    handleValidations(fs, validationMessages, fg: FormGroup) {
        // avoid mutation
        const fields = Object.assign({}, fs);

        Object.keys(fields).forEach(field => {
            const control = fg.get(field);
            if (control instanceof FormControl) {
                if (!control.valid) {
                    const messages = validationMessages[field];
                    Object.keys(control.errors).forEach(key => {
                        fields[field] += messages[key];
                    })
                }
            }

            if (control instanceof FormArray && fields[field].$each) {
                (control as FormArray).controls.forEach((val, idx) => {
                    const innerFg = control.get(idx.toString()) as FormGroup;
                    const err = this.handleValidations(fields[field].$each, validationMessages[field].$each, 
                        innerFg)
                    
                    fields[field][idx] = err;
                })
            }
        })
        console.log('final', fields)
        return fields;
    }

    initAddress() {
        return this._fb.group({
            street: ['', [Validators.required, Validators.minLength(5)]],
            postcode: ['']
        });
    }

    addAddress() {
        const control = this.myForm.get('addresses') as FormArray;
        control.push(this.initAddress());
    }

    removeAddress(i: number) {
        const control = this.myForm.get('addresses') as FormArray;
        control.removeAt(i);
    }

    save(model: Customer) {
        // call API to save
        // ...
        console.log(model);
    }
}