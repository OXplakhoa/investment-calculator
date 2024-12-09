import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Result({ input }) {
  const result = calculateInvestmentResults(input);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Intertest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((r, idx) => {
          const totalInterest =
            r.valueEndOfYear - r.annualInvestment * r.year - initialInvestment;
          const totalAmountInvest = r.valueEndOfYear - totalInterest;
          return (
            <tr key={idx}>
              <td>{r.year}</td>
              <td>{formatter.format(r.valueEndOfYear)}</td>
              <td>{formatter.format(r.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
