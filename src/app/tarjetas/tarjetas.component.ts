import { CardService } from "@app/_services/card.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tarjetas",
  templateUrl: "./tarjetas.component.html",
  styleUrls: ["./tarjetas.component.scss"]
})
export class TarjetasComponent implements OnInit {
  barraDeBusqueda: string = "";

  constructor(public cardService: CardService) {}

  ngOnInit() {}
}
