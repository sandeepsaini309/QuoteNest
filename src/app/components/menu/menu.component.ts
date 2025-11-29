import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

interface MenuInterface {
  name: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  standalone: true,
  imports: [
    MatIconModule,
    MatListModule,
    MatRippleModule,
    RouterModule,
    MatButtonModule,
  ],
})
export class MenuComponent {
  drawer = input.required<MatDrawer>();
  
  menuList: MenuInterface[] = [
    { name: 'Home', icon: 'home', link: '/home' },
    { name: 'Saved', icon: 'bookmark', link: '/saved' },
  ];

  closeDrawer() {
    this.drawer().close();
  }
}
