import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-calculus',
  templateUrl: './learn-calculus.component.html',
  styleUrls: ['./learn-calculus.component.scss']
})
export class LearnCalculusComponent implements OnInit {
  // This will send data to children, the menu is title, and topics
  menulist = [
    {main: 'LIMITS', topics:
      [{topic: 'What is it?'}, {topic: 'Test'}, {topic: 'Hello World'}, {topic: 'Server'}]
    },
    {main: 'INTERMIDIA', topics:
      [{topic: 'Messages'}, {topic: 'Input'}, {topic: 'Output'}, {topic: 'Other'}]
    },
    {main: 'AVANCED', topics:
      [{topic: 'Network'}, {topic: 'Manage'}, {topic: 'Hooks'}, {topic: 'Tip'}]
    }
  ];

  title = 'Calculus';

  constructor() { }

  ngOnInit() {
  }

}
