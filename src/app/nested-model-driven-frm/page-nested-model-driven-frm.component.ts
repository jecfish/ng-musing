import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { Customer } from './customer.interface';

@Component({
    selector: 'page-nested-model-driven-frm',
    templateUrl: './page-nested-model-driven-frm.component.html'
})
export class PageNestedModelDrivenFrmComponent implements OnInit {
    public myForm: FormGroup;

    formErrors = {}; // expected format = { name: 'error message' }
    addressesErrors = {}; // expected format = { 0: { street: 'error message' } }

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            addresses: this._fb.array([
                this.initAddress(),
            ])
        });

        this.myForm.valueChanges.subscribe(x => this.onValChanges(x));

        // HACK: trigger value changes immediately
        this.myForm.setValue({
            name: '',
            addresses: [
                { street: '', postcode: '' }
            ]
        })
    }

    onValChanges(data) {
        if (!this.myForm) return;

        this.onFormValueChanged();

        // handle addresses errors
        const addrs = this.myForm.get('addresses') as FormArray;

        // handle each address errors
        addrs.controls.forEach((val, idx) => {
            this.onAddrValueChanged(idx);
        });
    }

    /* Update Main Form Validations */
    onFormValueChanged() {
        // setup fields to validate and the messages
        const e = { name: '' }
        const validationMessages = {
            name: {
                required: 'it is required',
                minlength: 'must be more than 5'
            }
        };

        for (const field in e) {
            const control = this.myForm.get(field);

            if (control && !control.valid) {
                const messages = validationMessages[field];
                for (const key in control.errors) {
                    e[field] += messages[key] + ' ';
                }
            }
        }

        this.formErrors = Object.assign(this.formErrors, e);
    }

    /* Update Each Address Validation */
    onAddrValueChanged(idx) {
        // setup fields to validate and the messages
        const e = { street: '' }
        const validationMessages = {
            street: {
                required: 'my god'
            }
        }

        for (const field in e) {
            const control = this.myForm.get(`addresses.${idx}.${field}`);

            if (control && !control.valid) {
                const messages = validationMessages[field];
                for (const key in control.errors) {
                    e[field] += messages[key] + ' ';
                }
            }
        }

        this.addressesErrors = Object.assign(this.addressesErrors, { [idx]: e });
    }

    initAddress() {
        return this._fb.group({
            street: ['', Validators.required],
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