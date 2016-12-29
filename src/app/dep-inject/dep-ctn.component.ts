import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dep-ctn',
    template: `<div>{{ name }}</div>`
})
export class DepCtnComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}