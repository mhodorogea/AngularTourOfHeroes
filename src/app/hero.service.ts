import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // Not to do on a real app, because fetching data from a remote server is an asynchronous operation
  getHeroes(): Hero[] {
    return HEROES;
  }

  //best practice Asynchronously, in real case scenario with database
  getHeroesAsynchronously(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  addMessage(message: string): void {
    this.messageService.add(message);
  }
}
