import * as _ from "lodash";
import { Card } from "@app/_models/card";
import { CardService } from "@app/_services/card.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gestion-tarjetas",
  templateUrl: "./gestion-tarjetas.component.html",
  styleUrls: ["./gestion-tarjetas.component.scss"],
  providers: [CardService],
})
export class GestionTarjetasComponent implements OnInit {
  get cards(): Card[] {
    return this._cards;
  }

  get selectedCard(): Card {
    return this._selectedCard;
  }

  set selectedCard(value: Card) {
    this._selectedCard = value;
  }

  get filteredCards(): Card[] {
    return this._filteredCards;
  }

  set filteredCards(value: Card[]) {
    this._filteredCards = value;
  }

  get search(): string {
    return this._search;
  }

  set search(value: string) {
    this._search = value;
  }

  private _cards: Card[];
  private _selectedCard: Card;
  private _filteredCards: Card[];
  private _search: string = "";

  constructor(public cardService: CardService) {}

  ngOnInit() {
    this._cards = this.cardService.sortedCards;
  }

  selectCard(id: number) {
    this.selectedCard = this.cardService.sortedCards
      .filter((card) => card.id === id)
      .pop();
  }

  filter(searchString: string) {
    this.filteredCards = this.cardService.sortedCards.filter((card) =>
      card.title.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
    );
  }

  update(card: Card) {
    const updatedCard = _.clone(card);
    this.cardService.update(updatedCard).then((result) => {
      console.log(result);
    });
  }
}
