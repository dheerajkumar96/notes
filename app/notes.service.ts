import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes: any = [] ;
  id: number;
  keys: any = [];
  constructor() { }

  savenotes(form) {
    this.id = localStorage.length;
    localStorage.setItem((this.id + 1).toLocaleString() , JSON.stringify(form));
  }

  getnotes(): Observable<any> {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < localStorage.length; i++) {
      this.notes[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
      console.log(this.notes);
    }
    return this.notes;
  }

  deletenote(id: any) {
    localStorage.removeItem(id);
  }
}
