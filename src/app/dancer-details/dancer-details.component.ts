import { Component, OnInit, Input } from '@angular/core';
import { Danseur } from '../dancers/dancer';

@Component({
  selector: 'app-dancer-details',
  templateUrl: './dancer-details.component.html',
  styleUrls: ['./dancer-details.component.css'],
})
export class DancerDetailsComponent implements OnInit {
  @Input() dancer: Danseur;
  constructor() {}

  ngOnInit(): void {}
}
