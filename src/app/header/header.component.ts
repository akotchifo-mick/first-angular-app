import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  template: `
  <h1>{{ title }}</h1>
  <nav>
  <a routerLink="/home">Home</a>
  <a routerLink="/contacts">Contacts</a>
</nav>
  `,
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'My Notes';
}
