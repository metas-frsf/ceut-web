import {
  Component,
  Inject,
  Input,
  OnInit,
  ViewEncapsulation
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { Card } from "@app/_models/card";

@Component({
  selector: "app-tarjeta-generica",
  templateUrl: "./tarjeta-generica.component.html",
  styleUrls: [
    "../tarjetas.component.scss",
    "../../../assets/scss/colors.scss",
    "../../../assets/scss/fonts.scss",
    "./tarjeta-generica.component.scss"
  ],
  encapsulation: ViewEncapsulation.None
})
export class TarjetaGenericaComponent implements OnInit {
  @Input() card: Card;
  baseUrl = "";

  constructor(@Inject(DOCUMENT) private document: any) {}

  ngOnInit() {}

  navigateToCard(url: string) {
    if (url) {
      this.document.location.href = url;
    }
  }
}
