import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const handleChange = (e) => {
    setUserInput(e.target.value);
  }
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="input">INITIAL INVESTMENT</label>
          <input type="number" htmlFor="input" />
        </p>
        <p>
          <label htmlFor="input">ANNUAL INVESTMENT</label>
          <input type="text" htmlFor="input" />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="input">EXPECTED RETURN</label>
          <input type="number" htmlFor="input" />
        </p>
        <p>
          <label htmlFor="input">DURATION</label>
          <input type="number" htmlFor="input" />
        </p>
      </div>
    </section>
  );
}
