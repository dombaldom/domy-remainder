import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lcalculus',
  templateUrl: './lcalculus.component.html',
  styleUrls: ['./lcalculus.component.scss']
})
export class LcalculusComponent implements OnInit {

  @Input()  openSection = '';

  constructor() { }

  ngOnInit() {
  }

}
