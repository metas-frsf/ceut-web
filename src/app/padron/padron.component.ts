import { Component } from '@angular/core';
import { PadronService } from '@app/_services/padron.service';

@Component({
  selector: 'app-padron',
  templateUrl: './padron.component.html',
  styleUrls: ['./padron.component.scss']
})
export class PadronComponent {
  dni: string;

  constructor(private padronService: PadronService) {}
/*
  consultar() {
    this.padronService.consultar(this.dni).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }*/
}
