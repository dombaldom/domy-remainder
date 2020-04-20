import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LearnCalculusComponent} from '../../../learn-calculus/learn-calculus.component';
import { GlobalConstants} from '../../../global-constants';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

@Input() primaryTheme = GlobalConstants.themeColorPrimary;
@Input() accentTheme = GlobalConstants.thermColorWarn;
@Input()

@Input() opened = 'opened';
@Input() menu = '';
@Input() bodyinfo = '';
@Input() titleToolBar = '';


topic = '';
toggle = false;

  constructor() { }


  ngOnInit() {
  }

  // Set topic to show in the main screen.
  setTopic(topic){
    this.topic = topic;
  }

  onSearchChange(searchValue: string): void {
    console.log(searchValue);
  }

  oculta(sidenav) {
    sidenav.toggle();
    this.toggle = !this.toggle;
  }

}
