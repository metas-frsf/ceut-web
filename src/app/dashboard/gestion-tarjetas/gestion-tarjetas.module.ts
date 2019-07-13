import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GestionTarjetasRoutingModule } from "./gestion-tarjetas-routing.module";
import { GestionTarjetasComponent } from "./gestion-tarjetas.component";
import { TarjetaGenericaModule } from "@app/tarjetas/tarjeta-generica/tarjeta-generica.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [GestionTarjetasComponent],
  imports: [
    CommonModule,
    FormsModule,
    TarjetaGenericaModule,
    GestionTarjetasRoutingModule
  ]
})
export class GestionTarjetasModule {}
