import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';

@Injectable()
export class DepAService {

    constructor() { }

    getGreeting(name: string) {
        return 'Hello ' + name;
    }

    // getUsers() {
    //     return this.http.get(`https://api.github.com/users`)
    //         .map(x => x.json());
    // }
}