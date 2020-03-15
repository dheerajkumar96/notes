import { Component, OnInit} from '@angular/core';
import { NotesService } from '../notes.service';
import { NgForm } from '@angular/forms';
import { notes } from '../notes.model';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
note: notes;
public value: boolean;
public createddate: number = Date.now();
  constructor(private srv: NotesService, private route: Router, private dt: DatePipe) { }

  ngOnInit() {
    this.note = new notes();
    this.note.date = this.dt.transform(Date.now(), 'dd MMM yyyy hh:mm a');
  }
  onsubmit(form: NgForm) {
    this.srv.savenotes(form.value);
    this.route.navigate(['']);
  }

  createnote() {
this.value = true;
  }

}
