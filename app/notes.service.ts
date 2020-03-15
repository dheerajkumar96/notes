import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: any = [];
  constructor() { }

  savenotes(form) {
    localStorage.setItem('notes' , JSON.stringify(form));
  }

  getnotes(): any {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < localStorage.length; i++) {
      this.notes[i] = localStorage.getItem(localStorage.key(i));
    }
    return this.notes;
  }
}
