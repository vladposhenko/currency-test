import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICurrency} from "../../models/currency";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-currency-row',
  templateUrl: './currency-row.component.html',
})

export class CurrencyRowComponent implements OnInit {
  @Input()  amount: number
  @Input()  selectedCurrency: ICurrency
  @Input()  currencies: ICurrency[]
  @Output() handleAmount = new EventEmitter<string>();
  @Output() handleCurrency = new EventEmitter<string>();
  amountControl: FormControl;
  currencyControl: FormControl;
  constructor() { }

  ngOnInit(): void {
    this.amountControl = new FormControl("0")
    this.currencyControl = new FormControl(this.selectedCurrency.txt)
    this.amountControl.valueChanges.subscribe(value => {
      this.onChangeAmount(value)
    })
    this.currencyControl.valueChanges.subscribe(value => {
      this.onChangeCurrency(value)
    })
  }

  onChangeAmount (value:string) {
    this.handleAmount.emit(value)
  }

  onChangeCurrency (value:string) {
    this.handleCurrency.emit(value)
  }
}
