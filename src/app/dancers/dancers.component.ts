import { Component, OnInit } from '@angular/core';
import { Danseur } from './dancer';
import { DancerService } from '../dancer.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dancers',
  templateUrl: './dancers.component.html',
  styleUrls: ['./dancers.component.css'],
})
export class DanseursComponent implements OnInit {
  dancers: Danseur[];
  selectedDancer: Danseur;

  constructor(
    private dancerService: DancerService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getDancers();
  }

  onSelect(dancer: Danseur): void {
    this.selectedDancer = dancer;
    this.messageService.add(`DancerService: Selected dancer id=${dancer.id}`);
  }

  getDancers(): void {
    this.dancerService
      .getDancers()
      .subscribe((dancers) => (this.dancers = dancers));
  }
}
