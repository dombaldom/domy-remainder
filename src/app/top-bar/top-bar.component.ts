import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  @Output()
  emitterpic = new EventEmitter<string>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  changePic(pic: string) {
    this.emitterpic.emit(pic);
  }


  whoaim(): void {
    const dialogRef = this.dialog.open(DialogProductoEliminarComponent, {
      width: '40%',
      data: { idProducto: 'id' }
    });
    }


}



@Component({
  selector: 'app-dialogo-producto-eliminar',
  templateUrl: 'dialogo-about.html',
  styleUrls: ['top-bar.component.scss']
})
export class DialogProductoEliminarComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogProductoEliminarComponent>
    ) {}


  closeDialog(): void {
    this.dialogRef.close();
  }
}
