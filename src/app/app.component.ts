import { Component } from '@angular/core';
import { HomeComponent } from './features/home/home.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<app-home></app-home>',
  imports: [HomeComponent]
})
export class AppComponent {
}
