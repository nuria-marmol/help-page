import { Component } from '@angular/core';
import { IconCardComponent } from './icon-card/icon-card.component';
import { IconCardType } from '../icon-card-type';

@Component({
  selector: 'app-help-page',
  imports: [IconCardComponent],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.css'
})
export class HelpPageComponent {
  cards: Array<IconCardType> = [
    {
      title: 'Título de ejemplo1',
      text: 'Párrafo 1 del componente',
      iconClass: 'fa-solid fa-leaf'
    },
    {
      title: 'Título de ejemplo2',
      text: 'Párrafo 2 del componente',
      iconClass: 'fa-solid fa-book'
    },
    {
      title: 'Título de ejemplo3',
      text: 'Párrafo 3 del componente',
      iconClass: 'fa-solid fa-user'
    }
  ]

  seeSelectedCard(value: string) {
    console.log(value);
  }
}
