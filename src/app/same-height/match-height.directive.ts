import {
    Directive, ElementRef, AfterViewChecked, 
    Input, HostListener
} from '@angular/core';

@Directive({
    selector: '[myMatchHeight]'
})
export class MatchHeightDirective implements AfterViewChecked {

    // class name to match height
    @Input()
    myMatchHeight: any;

    constructor(private el: ElementRef) {
    }

    ngAfterViewChecked() {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    }

    @HostListener('window:resize') 
    onResize() {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    }

    matchHeight(parent: HTMLElement, className: string) {
        // match height logic here

        if (!parent) return;
        const children = parent.getElementsByClassName(className);

        if (!children) return;

        // reset all children height
        Array.from(children).forEach((x: HTMLElement) => {
            x.style.height = 'initial';
        })

        // gather all height
        const itemHeights = Array.from(children)
            .map(x => x.getBoundingClientRect().height);

        // find max height
        const maxHeight = itemHeights.reduce((prev, curr) => {
            return curr > prev ? curr : prev;
        }, 0);

        // apply max height
        Array.from(children)
            .forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);
    }
}