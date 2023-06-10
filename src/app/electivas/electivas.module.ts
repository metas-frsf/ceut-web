import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ElectivasRoutingModule } from "./electivas-routing.module";
import { ElectivasComponent } from "@app/electivas/electivas.component";
import { FormsModule } from "@angular/forms";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { ElectivasService } from "@app/_services/electivas.service";

@NgModule({
  declarations: [ElectivasComponent],
  imports: [
    CommonModule,
    FormsModule,
    ElectivasRoutingModule,
    NgbDropdownModule,
  ],
  providers: [ElectivasService],
})
export class ElectivasModule {}
