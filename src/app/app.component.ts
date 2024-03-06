import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent,MenuComponent],
  //templateUrl: './app.component.html',
  template: '<app-header />',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notes-app';
}
