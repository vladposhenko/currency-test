import {Component, Input} from '@angular/core'
import {ICurrency} from "../models/currency";

@Component({
    selector: 'app-currency',
    templateUrl: './currency.component.html'
})

export class CurrencyComponent {
  @Input() currency: ICurrency[]
  inputValue: number

  onSelect() {
    console.log('click')
  }
}
