import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
@Component({
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule],
  selector: 'app-example',
  styleUrl: './example.scss',
  templateUrl: './example.html',
})
export class Example {
  number1: string = '';
  number2: string = '';
  result: string | null = null;
  showMessage() {
    //alert('Hello from example component!');
    this.result = (parseFloat(this.number1) + parseFloat(this.number2)).toString();   
    console.log(`The result of ${this.number1} + ${this.number2} is ${this.result}`);   
  }


}
