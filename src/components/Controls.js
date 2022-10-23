import './Controls.css';
import {currencies} from '../hooks/useCoins';

const Controls = (props) => {
    return (
        <div className='controls'>
            <select className='select-currency-button' onChange={event => {
                props.setCurrencyIndex(+event.target.value);
            }} value={props.currencyIndex}>
                {currencies.map((currency, index) => (
                        <option key={index} value={index}>{currency.name}</option>
                    )
                )}
            </select>
            <div className='input-wrapper'>
                <input id='filter' name='filter' type='text' value={props.filter}
                       onChange={event => props.setFilter(event.target.value)} placeholder='Search' autoComplete='off'
                       className='search-input'/>
            </div>


        </div>
    );
};

export default Controls;