import { Component, OnInit } from '@angular/core';
import {ICurrency} from "./models/currency";
import {CurrenciesService} from "./services/currencies.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  currencies:  ICurrency[] = []
  fromCurrency: ICurrency
  toCurrency:ICurrency
  amount = 1;
  amountInFromCurrency = false;
  toAmount = 0;
  fromAmount = 0;
  headerCurrencies: ICurrency[] = []
  constructor(private currenciesService:CurrenciesService) {
  }
  ngOnInit(): void {
    this.currenciesService.getCurrencies().subscribe(currency => {
      this.currencies = currency
      this.getHeaderCurrency()
      this.countRate()
    })

    this.fromCurrency =  {
      r030:840,
      txt:"Долар США",
      rate:36.5686,
      cc:"USD",
      exchangedate:"04.10.2022"
    }
    this.toCurrency = {
      r030:978,
      txt:"Євро",
      rate:35.7074,
      cc:"EUR",
      exchangedate:"04.10.2022"
    }
  }


  countRate():void {
    if (this.amount < 0){
      this.amount = 0
    }
    if(this.amountInFromCurrency){
        this.fromAmount = this.amount
        this.toAmount = +( this.fromCurrency.rate / this.toCurrency.rate * this.amount ).toFixed(3)
    } else {
        this.toAmount = this.amount
        this.fromAmount = +( this.toCurrency.rate / this.fromCurrency.rate * this.amount ).toFixed(3)
    }
  }

  handleFromAmountChange(value: string):void {
    this.amountInFromCurrency = true
    this.amount = +value
    this.countRate()
  }

  handleToAmountChange(value: string):void {
    this.amountInFromCurrency = false
    this.amount = +value
    this.countRate()
  }

  handleChangeFromCurrency(value: string):void {
    let filtered = this.currencies.filter((c) => c.txt === value)
    this.fromCurrency = filtered[0]
    this.amount = this.fromCurrency.rate
    this.countRate()
  }

  handleChangeToCurrency(value:string):void {
    let filtered = this.currencies.filter((c) => c.txt === value)
    this.toCurrency = filtered[0]
    this.amount = this.toCurrency.rate
    this.countRate()
  }

  getHeaderCurrency():void {
    let usd = this.currencies.filter(c => c.r030 === 840)
    let eur = this.currencies.filter(c => c.r030 === 978)
    this.headerCurrencies = [...usd, ...eur]
  }
}
