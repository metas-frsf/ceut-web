import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PadronRoutingModule } from "./padron-routing.module";
import { PadronComponent } from "./padron.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [PadronComponent],
  imports: [
    CommonModule,
    FormsModule,
    PadronRoutingModule,
    ReactiveFormsModule,
  ],
})
export class PadronModule {}
