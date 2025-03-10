import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelpPageComponent } from './help-page/help-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HelpPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
