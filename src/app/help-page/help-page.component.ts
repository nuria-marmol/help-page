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
      title: 'Branches',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      iconClass: 'fa-solid fa-code-branch'
    },
    {
      title: 'Manage your account',
      text: 'Ipsam corrupti nemo modi voluptatum quidem consequuntur error nisi neque unde.',
      iconClass: 'fa-solid fa-user'
    },
    {
      title: 'Manage organisations, teams and projects',
      text: 'Exercitationem aspernatur ullam labore quia nobis eum mollitia debitis totam voluptate.',
      iconClass: 'fa-solid fa-puzzle-piece'
    },
    {
      title: 'Manage billing',
      text: 'Qui itaque laborum aut! Ipsum temporibus voluptatem quibusdam eaque itaque aspernatur omnis.',
      iconClass: 'fa-solid fa-sack-dollar'
    },
    {
      title: 'Authenticate to Abstract',
      text: 'Voluptate reiciendis suscipit.',
      iconClass: 'fa-solid fa-key'
    },
    {
      title: 'Abstract support',
      text: 'Pariatur possimus quisquam voluptates mollitia.',
      iconClass: 'fa-solid fa-comments'
    }
  ]

  seeSelectedCard(value: string) {
    console.log(value);
  }
}
