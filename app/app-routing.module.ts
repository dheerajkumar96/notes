import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { NotesidebarComponent } from './notesidebar/notesidebar.component';


const routes: Routes = [
  {
    path: '', component: NotesidebarComponent
  },
  {
    path: 'new', component: NotesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
