import {useEffect, useState} from 'react';

export const currencies = [{name: 'USD', symbol: '$'}, {name: 'EUR', symbol: '€'}];

function useCoins(currencyName) {
    const [coins, setCoins] = useState([]);

    function fetchCoins(name, callback) {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${name.toLowerCase()}`)
            .then(response => response.json())
            .then(value => {
                callback(value);
            });
    }

    useEffect(() => {
        fetchCoins(currencyName, setCoins);

        const id = setInterval(() => {
            fetchCoins(currencyName, setCoins);
        }, 60 * 1000);

        return () => clearInterval(id);
    }, [currencyName]);

    return coins;
}


export default useCoins;