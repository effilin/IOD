import { useReducer, useEffect } from "react";


 export default function BitcoinReducer(currency) {

    const [bitcoinResults, dispatch] = useReducer(reducer, {
       loading: true,
       bitcoinRate: null,                                                                                                                                                         
        error: null
    })

    useEffect(() => {
        console.log('updating Bitcoin rate');

        fetch(
           `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        )
        .then((response) => {
            dispatch({ type: 'fetch_success', payload: response.json.bitcoin[currency.toLowerCase()]})
        })
        .catch(error => {
            dispatch({type:"fetch_error", payload:error.message})
        })
    return () => {
        console.log('cleanup');
    }
    },[bitcoinResults]); 

    console.log(bitcoinResults)

    return bitcoinResults;
}


