import { useReducer, useEffect } from "react";

 const reducer = (state, action) => {
    switch (action.type) {
        case 'fetch_success' :
            return {
                loading: false,
                bitcoinRate: action.payload,                                                                                                                                                         
                error: null,
                }
        case "fetch_error" :
            return {
            loading: false,
            bitcoinRate: null,                                                                                                                                                         
            error: action.payload,
            }
        default:
            return {...state, loading: false}
    }
 };


 export default function BitcoinReducer(currency) {

    const [state, dispatch] = useReducer(reducer, {
       loading: true,
       bitcoinRate: [],                                                                                                                                                         
       error: null
    });

    useEffect(() => {
        console.log('updating Bitcoin rate');

        fetch(
           `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        )
        .then((response)=> response.json())
        .then((data) => {
            const rate = data.bitcoin[currency.toLowerCase()];
            dispatch({ type: 'fetch_success', payload: rate})
        })
        .catch(error => {
            dispatch({type:"fetch_error", payload:error.message})
        })
    return () => {
        console.log('cleanup');
    };
    },[currency]); 

    console.log(state)

    return state;
}


