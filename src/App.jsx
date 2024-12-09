function App() {
  return (
    <>
      <header id="header">
        <img src="/investment-calculator-logo.png" />
        <h1>Investment Calculator</h1>
      </header>
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
    </>
  );
}

export default App;
