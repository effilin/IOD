import { useState } from "react";
import BitcoinReducer from "./bitcoinRatesReducer";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

export default function BitcoinRates() {

    const [currency, setCurrency] = useState(currencies[0]);
    
    const bitcoinResults = BitcoinReducer(currency);

    
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
        <p>Bitcoin Price: {bitcoinResults.bitcoinRate}</p>
    </div>
)
}