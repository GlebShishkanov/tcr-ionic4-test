import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    body = document.body;
    html = document.documentElement;
    contentHeight: any;
    equalScreenheight: boolean;
    windowHeight: any;

  constructor() {}
  ionViewWillEnter() {
      this.getContentHeight();
      this.compareBodyAndContent();
  }
  getWindowHeight( ) {
      this.windowHeight = window.innerHeight;
      console.log(this.windowHeight);
  }
  getContentHeight() {
      this.contentHeight = this.body.offsetHeight;
      console.log(this.contentHeight);
  }
  compareBodyAndContent() {
      this.getContentHeight();
      this.getWindowHeight();
      if (this.windowHeight === this.contentHeight ) {
          this.equalScreenheight = true;
      } else {
          this.equalScreenheight = false;
      }
  }
}
