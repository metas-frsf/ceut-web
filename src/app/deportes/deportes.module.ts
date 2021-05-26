import { CommonModule } from "@angular/common";
import { DeportesComponent } from "@app/deportes/deportes.component";
import { DeportesRoutingModule } from "./deportes-routing.module";
import { DeportesService } from "@app/_services/deportes.service";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [DeportesComponent],
  imports: [CommonModule, DeportesRoutingModule, NgbNavModule],
  providers: [DeportesService],
})
export class DeportesModule {}
