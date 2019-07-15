import { Component, OnInit } from "@angular/core";
import { Card } from "@app/_models/card";
import { CardService } from "@app/_services/card.service";

@Component({
  selector: "app-gestion-tarjetas",
  templateUrl: "./gestion-tarjetas.component.html",
  styleUrls: ["./gestion-tarjetas.component.scss"],
  providers: [CardService]
})
export class GestionTarjetasComponent implements OnInit {
  private _selectedCard: Card;
  private cards: Card[];
  private _filteredCards: Card[];
  private _search: string = "";

  constructor(public cardService: CardService) {}

  ngOnInit() {
    this.cardService
      .getAll()
      .toPromise()
      .then(Cards => {
        this.cards = Cards;
        this.filteredCards = this.cards;
      });
  }

  selectCard(id: number) {
    this.selectedCard = this.cards.filter(card => card.id === id).pop();
  }

  filter(searchString: string) {
    this.filteredCards = this.cards.filter(card =>
      card.title.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
    );
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
}
