import { Injectable } from '@angular/core';
import { Pet } from './models/pet';
import { PETS } from '../data/pets';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  public pets: Pet[] = PETS;
  public AddPet(p: Pet) {
    p.id = this.pets.length + 1;
    this.pets.push(p);
    console.log(p);
  }
}
