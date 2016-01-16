// https://angular.io/docs/ts/latest/tutorial/toh-pt2.html
import {Component, OnInit} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-app',
    templateUrl: '../app2.html',
    styleUrls: ['../style.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class MyApp {
    public title = 'Tour of Heroes';
    public heroes: Hero[];
    public selectedHero: Hero;
    constructor(private _heroService: HeroService) {
        
    }
    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.getHeroes();
    }
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
}