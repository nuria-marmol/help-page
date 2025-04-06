import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconCardComponent } from './icon-card/icon-card.component';
import { IconCardType } from '../icon-card-type';

@Component({
  selector: 'app-help-page',
  imports: [IconCardComponent, FormsModule],
  templateUrl: './help-page.component.html',
  styleUrl: './help-page.component.css'
})
export class HelpPageComponent {
  inputSearch = '';
  cards: Array<IconCardType> = [
    {
      title: 'Branches',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      iconName: 'code-branch',
      iconColor: 'light-blue'
    },
    {
      title: 'Manage your account',
      text: 'Ipsam corrupti nemo modi voluptatum quidem consequuntur error nisi neque unde.',
      iconName: 'user',
      iconColor: 'medium-blue'
    },
    {
      title: 'Manage organisations, teams and projects',
      text: 'Exercitationem aspernatur ullam labore quia nobis eum mollitia debitis totam voluptate.',
      iconName: 'puzzle-piece',
      iconColor: 'medium-blue'
    },
    {
      title: 'Manage billing',
      text: 'Qui itaque laborum aut! Ipsum temporibus voluptatem quibusdam eaque itaque aspernatur omnis.',
      iconName: 'sack-dollar',
      iconColor: 'grey'
    },
    {
      title: 'Authenticate to Abstract',
      text: 'Voluptate reiciendis suscipit.',
      iconName: 'key',
      iconColor: 'grey'
    },
    {
      title: 'Abstract support',
      text: 'Pariatur possimus quisquam voluptates mollitia.',
      iconName: 'comments',
      iconColor: 'light-blue'
    }
  ]
  selectedCard: IconCardType = {
    title: '',
    text: '',
    iconName: '',
    iconColor: ''
  };
  allCards = true;

  seeSelectedCard(value: string) {
    const card = this.cards.find(element => element.title === value);
    if (card) {
      this.selectedCard = card;
    }
    this.allCards = false;
  }

  seeInputSearch() {
    console.log(this.inputSearch);
  }

  seeAllCards() {
    this.allCards = true;
  }
}
