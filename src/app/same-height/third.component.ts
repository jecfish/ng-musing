import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
@Component({
    selector: 'third',
    template: '<p>{{ paragraph }}</p>'
})
export class ThirdComponent implements OnInit {

    @Input()
    content: string;

    paragraph: string;

    constructor() { }

    ngOnInit() {
        Observable.of('sssss ssss ss s s s s s s ss')
            .delay(2000)
            .subscribe(x => this.paragraph = this.content.concat(x));
        // console.log(this.content)
    }


}