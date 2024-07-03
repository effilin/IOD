import { useState } from "react";
import { useBitcoin } from "./useBitcoin.js";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

export default function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const bitcoinRate = useBitcoin(currency);

    
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

    return (
   <div className="BitcoinRates componentBox">
        <h3>Bitcoin Exchange Rate</h3>
        <label>Choose currency:
            <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {options}
            </select>
        </label>
        <p>Selected Currency: {currency}</p>
        <p>Bitcoin Price: {bitcoinRate}</p>
    </div>
)
}

