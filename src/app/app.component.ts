import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
