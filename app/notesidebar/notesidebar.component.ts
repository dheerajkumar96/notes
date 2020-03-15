import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notesidebar',
  templateUrl: './notesidebar.component.html',
  styleUrls: ['./notesidebar.component.css']
})
export class NotesidebarComponent implements OnInit {
notes: any;
  constructor(private srv: NotesService) { }

  ngOnInit() {
    this.notes = this.srv.getnotes();
  }

}
