import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CalendarioRoutingModule } from "./calendario-routing.module";
import { CalendarioComponent } from "./calendario.component";

@NgModule({
  declarations: [CalendarioComponent],
  imports: [CommonModule, CalendarioRoutingModule],
})
export class CalendarioModule {}
