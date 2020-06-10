import { Injectable } from '@angular/core';
import { Danseur } from './dancers/dancer';
import { DANSEURS } from './mock-dancers';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DancerService {
  constructor(private messageService: MessageService) {}

  getDancers(): Observable<Danseur[]> {
    this.messageService.add('DancerService: fetched dancers');
    return of(DANSEURS);
  }
}
