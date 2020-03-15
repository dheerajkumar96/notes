import { Component, OnInit} from '@angular/core';
import { NotesService } from '../notes.service';
import { NgForm } from '@angular/forms';
import { notes } from '../notes.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
note: notes;
public value: boolean;
public createddate: Date;
  constructor(private srv: NotesService, private route: Router) { }

  ngOnInit() {
    this.note = new notes();
  }
  onsubmit(form: NgForm) {
    this.srv.savenotes(form.value);
    this.route.navigate(['']);
  }

  createnote() {
this.value = true;
  }

}
