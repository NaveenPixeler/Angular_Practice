import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  numbersAsText = [
    { id: 1, num: 'One' },
    { id: 2, num: 'Two' },
    { id: 3, num: 'Three' },
  ];

  selectThis = 'One';

  messageType: string = 'warning';

  isActive = false;
}
