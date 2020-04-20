import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-angular',
  templateUrl: './learn-angular.component.html',
  styleUrls: ['./learn-angular.component.scss']
})
export class LearnAngularComponent implements OnInit {

  // This will send data to children, the menu is title, and topics
  menulist = [
    {main: 'THE BASIC', topics:
      [{topic: 'Install'}, {topic: 'Test'}, {topic: 'Hello World'}, {topic: 'Server'}]
    },
    {main: 'INTERMIDIA', topics:
      [{topic: 'Messages'}, {topic: 'Input'}, {topic: 'Output'}, {topic: 'Other'}]
    },
    {main: 'AVANCED', topics:
      [{topic: 'Network'}, {topic: 'Manage'}, {topic: 'Hooks'}, {topic: 'Tip'}]
    }
  ];

 
  title = 'Angular';

  constructor() { }

  
  
  ngOnInit() {
  }

  

}
