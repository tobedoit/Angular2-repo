// https://angular.io/docs/ts/latest/tutorial/toh-pt3.html

import {Component} from 'angular2/core';
import {Hero} from './hero';

@Component ({
    selector: 'my-hero-detail',
    template: `
    <div *ngIf="hero">
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name" />
        </div>
    </div>
    `,
    inputs: ['hero'] // <my-hero-detail [hero]="selectedHero"></my-hero-detail>
    //Angular insists that we declare a target property to be an input property
})
export class HeroDetailComponent {
    public hero: Hero;
    
}