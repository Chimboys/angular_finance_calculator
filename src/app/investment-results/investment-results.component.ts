import {Component, Input} from '@angular/core';
import {investmentResult} from "../investment-result.model";
import {CommonModule, CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() results?:investmentResult[];

}
