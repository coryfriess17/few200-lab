import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent implements OnInit {

  amount = 0;
  tipPercent = .20;

  constructor() { }

  ngOnInit() {
  }

  updateAmount(amount: number) {

    this.amount = amount;
  }

  setTipPercent(percent: number) {
    this.tipPercent = percent;
  }
}
