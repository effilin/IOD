import { useEffect, useState } from "react";

export const useBitcoin = (currency) => {

    const [bitcoinRate, setBitcoinRate] = useState(null);

    useEffect(() => {
        console.log('updating Bitcoin rate');
        let ignore = false;

        fetch(
           `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        )
        .then((response) => response.json())
        .then(json => {
            if(!ignore) {
                console.log(json)
                setBitcoinRate(json.bitcoin[currency.toLowerCase()])
    }});
    return () => {
        ignore=true;
        console.log('cleanup');
    };
    },[currency]); 
    console.log(bitcoinRate)
    return bitcoinRate;
};