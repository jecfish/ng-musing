import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Post, GroupPosts } from './post.interface';

@Component({
    selector: 'posts-1',
    template: `
    <div class="list-group">
        <div *ngFor="let group of groupPosts" class="list-group-item">
            <h4>{{ group.category }}</h4>
            <ul>
                <li *ngFor="let post of group.posts">
                    {{ post.title }}
                </li>
            </ul>
        <div>
    </div>
    `
})
export class Posts1Component implements OnInit {

    @Input()
    data: Post[];

    groupPosts: GroupPosts[];

    constructor() { }

    ngOnInit() {
        this.groupPosts = this.groupByCategory(this.data);
    }

    groupByCategory(data: Post[]): GroupPosts[] {
        if (!data) return;
        const categories = new Set(data.map(x => x.category));
        const result = Array.from(categories).map(x => ({
            category: x,
            posts: data.filter(post => post.category === x)
        }));

        return result;
    }
}