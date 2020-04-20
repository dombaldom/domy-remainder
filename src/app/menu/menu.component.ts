import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {topics} from '../menu-topics';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  // Variables:
  topics = topics;
  background;

  // Inject dialog Material
  constructor(public dialog: MatDialog) { }

  // Default wallpaper is London, background is the name of de class in html
  ngOnInit() {

    this.background =  'london block1';
  }

  // Block1 is the name of the second class I use in the html page, it uses in class='' parameter html
  setWallPaper(message) {
    this.background = message + ' block1';
  }

  // Open the dialog, send data from this component to children component DialogProfileComponent
  openProfile() {
    const dialogRef = this.dialog.open(DialogProfileComponent, {
        data: {
          wall: this.background.replace('block1', ''),
          classwall: this.background.replace('block1', '')
        },
    })
  }

}

@Component({
  selector: 'app-dialog-profile',
  templateUrl: './dialogo-profile.html',
  styleUrls: ['./dialogo-profile.scss']
})
export class DialogProfileComponent {

  constructor(
        public dialogRef: MatDialogRef<DialogProfileComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogProfileComponent
    ) {}
}



