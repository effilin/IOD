import { useEffect, useState } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const [bitcoinRate, setBitcoinRate] = useState(null);

    useEffect(() => {
        console.log('updating Bitcoin rate');
        let ignore = false;

        fetch(
           `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        )
        .then(response =>response.json())
        .then(json => {
            if(ignore) {
                console.log(json)
                setBitcoinRate(json.bitcoin[currency.toLowerCase()])
    }});
    return () => {
        ignore=true;
        console.log('cleanup');
    };
    },[currency]);
    
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

    return (
   <div className="BitcoinRates componentBox">
        <h3>Bitcoin Exchange Rate</h3>
        <label>Choose currency:
            <select value={currency} onChange={e => setCurrency(e.target.value)}>
            {options}
            </select>
        </label>
        <p>Selected Currency: {currency}</p>
        <p>Bitcoin Price: {bitcoinRate}</p>
    </div>
)
}

export default BitcoinRates;