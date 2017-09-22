import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];

    constructor(
        private heroService: HeroService,
        private router: Router) { }

    ngOnInit() {
        this.getHeroes();
    }

    add(name: string) {
        name = name.trim();
        if (!name) return;

        return this.heroService
            .create(name)
            .then(h => {
                this.heroes.push(h);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero) {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero)
                    this.selectedHero = null;
            });
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    };

    getHeroes() {
        this.heroService.getHeroes().then(h => this.heroes = h);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
