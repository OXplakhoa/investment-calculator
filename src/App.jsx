import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const validInput = userInput.duration >= 1;
  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!validInput && <p className="center">Must be greater than 1</p>}
      {validInput && <Result input={userInput} />}
    </>
  );
}
export default App;
