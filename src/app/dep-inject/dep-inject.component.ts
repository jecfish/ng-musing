import { Component, OnInit, SkipSelf, Optional, Inject } from '@angular/core';
import { DepAService } from './dep-a.service';

class Engine {

}

@Component({
    selector: 'dep-inject',
    template: `<div>{{ greeting }}</div>`,
    providers: [ { provide: DepAService, useValue: { getGreeting(name) { return 'self ' + name } } } ]
})
export class DepInjectComponent implements OnInit {
    constructor(@SkipSelf() private depSvc: DepAService, @Optional() @Inject('a') private engine) { }

    greeting: string;

    ngOnInit() { 
        this.greeting = this.depSvc.getGreeting('jecelyn');
        // console.log(this.engine)

        // this.depSvc.getUsers()
        //     .subscribe(x => console.log(x))
    }
}