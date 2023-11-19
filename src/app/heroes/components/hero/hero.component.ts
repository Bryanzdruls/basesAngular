import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
    public name: string = 'Iron Man';
    public age: number = 45;

    public getCapitalizedName(): string{
      return this.name.toUpperCase();
    }

    public getHeroDescription(): string{
      return `${this.name} - ${this.age}`
    }

    public changeHero(value: string = 'No name' ): void{
      this.name = value;
    }
    public changeAge(value: number = 19 ): void{
      this.age = value;
    }
    public resetForm(): void{
      this.name= 'Iron Man';
      this.age = 45;
    }
}
