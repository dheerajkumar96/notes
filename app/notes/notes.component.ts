import { Component, OnInit} from '@angular/core';
import { NotesService } from '../notes.service';
import { NgForm } from '@angular/forms';
import { notes } from '../notes.model';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
note: notes;
  constructor(private srv: NotesService) { }

  ngOnInit() {
    this.note = new notes();
  }
  onsubmit(form: NgForm) {
    this.srv.savenotes(form.value);
  }

}
