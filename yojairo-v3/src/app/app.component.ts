import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yojairo-v3';
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
