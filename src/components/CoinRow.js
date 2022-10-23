import './CoinRow.css';

function toPrettyPrice(number) {
    for (let fraction = 2; fraction < 5; fraction++) {
        const fixed = number.toFixed(fraction);
        if (number / fixed === 1) {
            return fixed;
        }
    }
    return number.toFixed(5);
}

const CoinRow = (props) => {
    const coin = props.coin;
    return (
        <tr key={coin.id}>
            <td className='coin-icon-and-name'>
                <div className='coin-icon-div'>
                    <img src={coin.image} alt='' className='coin-icon'/>
                </div>

                <div>{coin.name}</div>
            </td>
            <td className='coin-symbol'>{coin.symbol}</td>
            <td>{props.currencySymbol}{toPrettyPrice(coin.current_price)}</td>
            <td className='currency-volume'>{coin.total_volume.toLocaleString()}</td>
            <td className='price-change'
                style={{color: `${coin.price_change_percentage_24h < 0 ? 'rgb(162,46,46)' : 'rgb(87,149,71)'}`}}>{coin.price_change_percentage_24h.toFixed(3)}%
            </td>
            <td className='currency-market-cap'>{props.currencySymbol}{coin.market_cap.toLocaleString()}</td>
        </tr>
    );
};

export default CoinRow;