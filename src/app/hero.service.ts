import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  
  // Not to do on a real app, because fetching data from a remote server is an asynchronous operation
  getHeroes(): Hero[] {
    return HEROES;
  }

  //best practice Asynchronously, in real case scenario with database
  getHeroesAsynchronously(): Observable<Hero[]> {
    return of(HEROES);
  }
}
