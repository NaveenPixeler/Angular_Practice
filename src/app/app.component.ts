import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.getRandomNumber();
  }
  title = 'get-train';

  numbersAsText = [
    { id: 1, num: 'One' },
    { id: 2, num: 'Two' },
    { id: 3, num: 'Three' },
  ];

  selectThis = "One";

  getRandomNumber() {
    return Math.floor(Math.random() * 7);
  }

  onButtonClick() {
    this.getRandomNumber();
  }
}
