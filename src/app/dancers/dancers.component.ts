import { Component, OnInit } from '@angular/core';
import { Danseur } from './dancer';
import { DANSEURS } from '../mock-dancers';

@Component({
  selector: 'app-dancers',
  templateUrl: './dancers.component.html',
  styleUrls: ['./dancers.component.css'],
})
export class DanseursComponent implements OnInit {
  dancers: Danseur[] = DANSEURS;
  selectedDancer: Danseur;

  onSelect(dancer: Danseur): void {
    this.selectedDancer = dancer;
  }

  constructor() {}

  ngOnInit(): void {}
}
