import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { IconCardType } from '../../icon-card-type';

@Component({
  selector: 'app-icon-card',
  imports: [NgClass],
  templateUrl: './icon-card.component.html',
  styleUrl: './icon-card.component.css'
})
export class IconCardComponent {
  @Input() card: IconCardType = {
    title: '',
    text: '',
    iconClass: ''
  };

  @Output() selectedCard = new EventEmitter<string>;

  sendTitle() {
    this.selectedCard.emit(this.card.title);
  }
}
