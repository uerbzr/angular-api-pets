import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PetsService } from '../pets.service';
import { Pet } from '../models/pet';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  public petForm: FormGroup;
  public petService: PetsService;

  constructor(
    private formBuilder: FormBuilder,
    private readonly service: PetsService
  ) {
    this.petForm = formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      age: [0, Validators.required],
    });
    this.petService = service;
  }
  addPet(): void {
    const newPet: Pet = {
      id: 0,
      name: this.petForm.value.name,
      description: this.petForm.value.description,
      age: this.petForm.value.age,
    };
    this.petService.AddPet(newPet);
    this.petForm.reset();
  }
}
