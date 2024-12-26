import {Component, inject} from '@angular/core';
import {InvestmentResult} from "../investment-result.model";
import {CommonModule} from "@angular/common";
import {InvestmentService} from "../investment.service";

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);
  get results() {
    return this.investmentService.annualData;
  }
}
