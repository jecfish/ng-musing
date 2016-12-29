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

        // handle main form errors
        this.onFormValueChanged();

        // handle addresses errors
        this.onAddrsValueChanged();
    }

    /* Update Main Form Validations */
    onFormValueChanged() {
        const custF = this.myForm;

        // setup fields to validate and the messages
        const fields = { name: '' };
        const validationMessages = {
            name: {
                required: 'it is required',
                minlength: 'must be more than 5'
            }
        };

        const re = this.handleValidations(fields, validationMessages, custF);
        this.formErrors = Object.assign(this.formErrors, re);
    }

    /* Update Addresses Validation */
    onAddrsValueChanged() {
        const addrsF = this.myForm.get('addresses') as FormArray;

        // setup fields to validate and the messages
        const fields = { street: '' };
        const validationMessages = {
            street: {
                required: 'my god'
            }
        };

        addrsF.controls.forEach((val, idx) => {
            const re = this.handleValidations(fields, validationMessages, addrsF.get(idx.toString()) as FormGroup);
            this.addressesErrors = Object.assign(this.addressesErrors, { [idx]: re });
            console.log({ [idx]: re });
        });
    }

    handleValidations(fs, validationMessages, fg: FormGroup) {
        // avoid mutation
        const fields = Object.assign({}, fs);

        for (const field in fields) {
            const control = fg.get(field);

            if (control && !control.valid) {
                const messages = validationMessages[field];
                for (const key in control.errors) {
                    fields[field] += messages[key] + ' ';
                }
            }
        }

        return fields;
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