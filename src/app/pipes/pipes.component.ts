import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  textToUpperCase: string = 'hello world';
  textToLowerCase: string = 'HELLO WORLD';
  price: number = 1234.56;
  numberToDecimal: number = 3.14159;
  fractionToPercent: number = 0.4567;
}
