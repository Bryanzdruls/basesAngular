import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 10000
  },{
    id: uuid(),
    name: 'Gohan',
    power: 100,
  }];

  public addCharacter(character:Character): void{
    const newCharacter:Character ={id: uuid(), ...character}
    this.characters.push(newCharacter);
  }

  public deleteCharacterById(id:string): void{
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
