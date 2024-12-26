import {Injectable} from "@angular/core";
import {InvestmentInput} from "./investment-input.model";
import {InvestmentResult} from "./investment-result.model";

@Injectable({providedIn: 'root'})
export class InvestmentService {
  public annualData: InvestmentResult[] = [];

  calculateInvestmentResults(inputData: InvestmentInput) {
    const {initialInvestment, duration, expectedReturn, annualInvestment } = inputData;
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  }

}
