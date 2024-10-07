import { Component } from '@angular/core';
import { PetsService } from '../pets.service';
import { Pet } from '../models/pet';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  pets: Pet[] = [];
  constructor(private readonly petService: PetsService) {
    this.pets = petService.pets; //[...petService.pets];
  }
}
