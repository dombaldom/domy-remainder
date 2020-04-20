import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-langular',
  templateUrl: './langular.component.html',
  styleUrls: ['./langular.component.scss']
})
export class LangularComponent {

@Input()  openSection = '';

  constructor() { }


}
