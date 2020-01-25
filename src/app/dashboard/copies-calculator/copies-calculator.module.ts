import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CopiesCalculatorRoutingModule } from "./copies-calculator-routing.module";
import { CopiesCalculatorComponent } from "./copies-calculator.component";

@NgModule({
  declarations: [CopiesCalculatorComponent],
  imports: [CommonModule, CopiesCalculatorRoutingModule]
})
export class CopiesCalculatorModule {}
