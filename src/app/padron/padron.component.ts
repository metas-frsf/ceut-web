import { Component, inject } from "@angular/core";
import { Estudiante } from "@app/_models/padron";
import { PadronService } from "@app/_services/padron.service";

@Component({
  selector: "app-padron",
  templateUrl: "./padron.component.html",
  styleUrls: ["./padron.component.scss"],
})
export class PadronComponent {
  dni: string;
  consultado: boolean = false;
  votante: Estudiante = null;

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
    this.consultado = true;
  }
}
