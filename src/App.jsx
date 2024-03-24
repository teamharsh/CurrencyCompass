import { useState } from "react";
import { InputByUser } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import backgroundImage from "./assets/Background.png";
import { FaExchangeAlt, FaCheck } from "react-icons/fa";
import "./App.css";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="w-full">
      <h1 className="text-center text-3xl font-bold mb-4 text-purple-900">Currency Compass</h1> 
        <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-md bg-white bg-opacity-30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-4">
              <InputByUser
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>
            <br />
            <div className="relative w-full h-0.5 mb-4">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-teal-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                <FaExchangeAlt size={24} />
              </button>
            </div>
            <div className="w-full mb-4">
              <InputByUser
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onAmountChange={(amount) => setConvertedAmount(amount)}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
              <FaCheck size={16} className="inline-block ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
