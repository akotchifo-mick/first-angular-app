import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { NotesListComponent } from "./notes-list/notes-list.component";
import { AddNoteComponent } from './add-note/add-note.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, MenuComponent, NotesListComponent, AddNoteComponent, HomeComponent, ContactComponent]
})
export class AppComponent {
  title = 'notes-app';
}
