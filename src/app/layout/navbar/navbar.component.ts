import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isDarkMode = false;
  rotate = false;

  toggleTheme() {
    this.rotate = true;

    setTimeout(() => {
      this.isDarkMode = !this.isDarkMode;
      document.body.classList.toggle('dark-mode', this.isDarkMode);
    }, 100);

    setTimeout(() => {
      this.rotate = false;
    }, 600); // Duración de la rotación
  }
}
