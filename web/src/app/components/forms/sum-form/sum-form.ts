import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule],
  selector: 'app-sum-form',
  styleUrl: './sum-form.scss',
  templateUrl: './sum-form.html',
})
export class SumForm {
  num1="";
  num2="";
  result="";
  sumForm() {
    console.log("num1: " + this.num1 + " num2: " + this.num2);
    this.result = (Number(this.num1) + Number(this.num2)).toString();
  }


}
