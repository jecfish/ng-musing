import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'simple-pagination',
    template: `
    <button (click)="previousPage()" [disabled]="!hasPrevious()">{{ previousText }}</button> 
    <button (click)="nextPage()" [disabled]="!hasNext()">{{ nextText }}</button>
    
    <p>page {{ page }} of {{ pageCount }}</p>
  `,
  styleUrls: ['./pagination.component.css']
})
export class SimplePaginationComponent {

    title: string;

    @Input()
    previousText = 'Previous';

    @Input()
    nextText = 'Next';

    @Input()
    pageCount: number;

    @Input()
    page: number;

    @Output()
    pageChanged = new EventEmitter<number>();

    nextPage() {
        this.page++;
        this.pageChanged.emit(this.page);
    }

    previousPage() {
        this.page--;
        this.pageChanged.emit(this.page);
    }

    hasPrevious(): boolean { return +this.page > 1; }

    hasNext(): boolean { return +this.page < +this.pageCount; }

}