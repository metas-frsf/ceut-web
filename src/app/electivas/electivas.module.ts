import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ElectivasRoutingModule } from "./electivas-routing.module";
import { ElectivasComponent } from "@app/electivas/electivas.component";
import { FormsModule } from "@angular/forms";
import {
  NgbButtonsModule,
  NgbDropdownModule
} from "@ng-bootstrap/ng-bootstrap";
import { ElectivasService } from "@app/_services/electivas.service";
import { AngularFullpageModule } from "@fullpage/angular-fullpage";

@NgModule({
  declarations: [ElectivasComponent],
  imports: [
    AngularFullpageModule,
    CommonModule,
    FormsModule,
    ElectivasRoutingModule,
    NgbDropdownModule,
    NgbButtonsModule
  ],
  providers: [ElectivasService]
})
export class ElectivasModule {}
