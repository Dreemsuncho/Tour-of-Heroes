import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';


@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`
        return this.http.get(url)
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(res => res.json().data as Hero[])
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Hero)
            .catch(this.handleError);
    }

    update(hero: Hero) {
        const url = `${this.heroesUrl}/${hero.id}`
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(id: number) {
        const url = `${this.heroesUrl}/${id}`;
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(err: any): Promise<any> {
        console.error('An err occurred', err);
        return Promise.reject(err.message || err);
    }
}

function strat(): string {
    return '';
}