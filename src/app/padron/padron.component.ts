import { Component, inject } from "@angular/core";
import { PadronService } from "@app/_services/padron.service";

@Component({
  selector: "app-padron",
  templateUrl: "./padron.component.html",
  styleUrls: ["./padron.component.scss"],
})
export class PadronComponent {
  dni: string;

  private padronService = inject(PadronService);

  constructor() {}

  onSubmit() {
    this.padronService.consultar(this.dni).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
