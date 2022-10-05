import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICurrency} from "../../models/currency";

@Component({
  selector: 'app-currency-row',
  templateUrl: './currency-row.component.html',
  styleUrls: ['./currency-row.component.css']
})
export class CurrencyRowComponent implements OnInit {
  @Input() public amount: number
  @Input() public fromAmount: number
  @Input() public selectedCurrency: ICurrency
  @Input() public fromCurrency: ICurrency
  @Input() public toCurrency: ICurrency
  @Input() public currencies: ICurrency[]
  @Input() public countRate: () => void
  @Output() handleAmount = new EventEmitter();
  @Output() handleCurrency = new EventEmitter();
  constructor() {

  }

  ngOnInit(): void {

  }


}
