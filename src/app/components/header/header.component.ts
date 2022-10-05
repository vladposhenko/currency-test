import {Component, Input, OnInit} from '@angular/core';
import {ICurrency} from "../../models/currency";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() headerCurrencies: ICurrency[]
  constructor() { }

  ngOnInit(): void {
  }

}
