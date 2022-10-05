import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICurrency} from "../../models/currency";

@Component({
  selector: 'app-currency-row',
  templateUrl: './currency-row.component.html',
})
export class CurrencyRowComponent implements OnInit {
  @Input()  amount: number
  @Input()  fromAmount: number
  @Input()  selectedCurrency: ICurrency
  @Input()  fromCurrency: ICurrency
  @Input()  toCurrency: ICurrency
  @Input()  currencies: ICurrency[]
  @Input()  countRate: () => void
  @Output() handleAmount = new EventEmitter();
  @Output() handleCurrency = new EventEmitter();
  constructor() {

  }

  ngOnInit(): void {

  }


}
