import { useId } from 'react';

function InputByUser({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
}) {
    const amountInputId = useId();

    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={amountInputId} className="text-gray-700 mb-2">
                {label}
            </label>
            <input
                id={amountInputId}
                className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none"
                type="number"
                placeholder="Amount"
                disabled={amountDisable}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
            <select
                className="mt-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none"
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisable}
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency} className="text-gray-800">
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default InputByUser;
