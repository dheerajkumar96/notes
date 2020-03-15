import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notesidebar',
  templateUrl: './notesidebar.component.html',
  styleUrls: ['./notesidebar.component.css']
})
export class NotesidebarComponent implements OnInit {
notes: any = [];
title: any = [];
body: any = [];
value: any;
  constructor(private srv: NotesService, private route: Router) { }

  ngOnInit() {
    this.notes = this.srv.getnotes();
  }
  deletenote(i) {
    this.srv.deletenote(localStorage.key(i));
    location.reload();
  }
}
