import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-income-displayer',
  imports: [CommonModule, DecimalPipe],
  templateUrl: './income-displayer.component.html',
  styleUrls: ['./income-displayer.component.css']
})
export class IncomeDisplayerComponent implements OnInit {
  initialNetWorth: number = 50000;  // Starting net worth
  currentIncome: number = 5000;     // Monthly income

  projectedIncome: number[] = [];

  ngOnInit() {
    let sum = 2;
  }

}
