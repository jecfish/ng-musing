import { Component, Input } from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
})
export class CardComponent {
    @Input()
    public header: string = 'this is header';
    
    @Input()
    public footer: string = 'this is footer';
}