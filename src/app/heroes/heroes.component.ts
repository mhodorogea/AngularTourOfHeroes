import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from "../mock-heroes";
import { HeroService } from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;

  selectedHero: Hero;

  //USING THE SERVICE
  heroesFromServiceSync;
  heroesFromServiceAsync;


  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroesAsynchronously();
    this.getHeroesSync();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.heroService.addMessage("Item selected: " + hero.name);
  }

  // synchronously
  getHeroesSync(): void {
    this.heroesFromServiceSync = this.heroService.getHeroes();
  }

  // best practice > Async
  getHeroesAsynchronously(): void {
    this.heroService.getHeroesAsynchronously().subscribe(heroes => this.heroesFromServiceAsync = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroesFromServiceAsync.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroesFromServiceAsync = this.heroesFromServiceAsync.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
