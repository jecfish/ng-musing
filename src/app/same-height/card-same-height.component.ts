import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'card-same-height',
    templateUrl: './card-same-height.component.html'
})
export class CardSameHeightComponent implements OnInit {

    @Input()
    title: string;

    @Input()
    content: string;

    constructor() { }

    ngOnInit() { 
    }

    
}