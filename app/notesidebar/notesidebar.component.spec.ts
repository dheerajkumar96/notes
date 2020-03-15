import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesidebarComponent } from './notesidebar.component';

describe('NotesidebarComponent', () => {
  let component: NotesidebarComponent;
  let fixture: ComponentFixture<NotesidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
