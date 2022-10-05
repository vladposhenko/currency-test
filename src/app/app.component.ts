import {AfterViewInit, Component, OnInit} from '@angular/core';
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
      this.countRate()
      this.getHeaderCurrency()
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


  countRate() {
    if(this.amountInFromCurrency){
      if(this.amount < 0 ) {
        this.fromAmount = 0
      } else {
        this.fromAmount = this.amount
        this.toAmount = +( this.fromCurrency.rate / this.toCurrency.rate * this.amount ).toFixed(3)
      }
    } else {
      if(this.amount < 0 ) {
        this.toAmount = 0
      } else {
        this.toAmount = this.amount
        this.fromAmount = +( this.toCurrency.rate / this.fromCurrency.rate * this.amount ).toFixed(3)
      }
    }
  }


  handleFromAmountChange(value: string) {
    debugger;
    this.amountInFromCurrency = true
    if(+value < 0) {
      this.amount = 0
    } else {
      this.amount = +value
    }
    this.countRate()
  }

  handleToAmountChange(value: string) {
    this.amountInFromCurrency = false
    this.amount = +value
    this.countRate()
  }

  handleChangeFromCurrency(value: string) {
    let filtered = this.currencies.filter((c) => c.txt === value)
    this.fromCurrency = filtered[0]
    this.amount = this.fromCurrency.rate
    this.countRate()
  }

  handleChangeToCurrency(value:string) {
    let filtered = this.currencies.filter((c) => c.txt === value)
    this.toCurrency = filtered[0]
    this.amount = this.toCurrency.rate
    this.countRate()
  }

  getHeaderCurrency() {
    // @ts-ignore
    this.headerCurrencies =  this.currencies.filter(c => {
      if(c.r030 === 840 || c.r030 === 978){
        return c
      }
    })
  }


}
