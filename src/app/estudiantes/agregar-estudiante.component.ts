import {Component, Inject} from '@angular/core';
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from "@angular/material";

@Component({
  selector: 'agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
})
export class AgregarEstudianteComponent {

  constructor(
    public dialogRef: MdDialogRef<AgregarEstudianteComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
