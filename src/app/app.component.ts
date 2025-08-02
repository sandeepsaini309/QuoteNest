import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgxSpinnerModule, HeaderComponent, MatSidenavModule, MenuComponent, RouterOutlet],
})
export class AppComponent {
  // screenWidth: number;

  constructor() {
    // this.screenWidth = window.innerWidth;
    // window.onresize = () => {
    //   // * set screenWidth on screen size change
    //   this.screenWidth = window.innerWidth;
    // };
  }

  ngOnInit() {}

  ngOnDestroy() {}
}
