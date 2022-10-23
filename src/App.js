import './App.css';

import {useState} from 'react';

import CoinsTable from './components/CoinsTable';
import Controls from './components/Controls';
import ArrowButton from './components/ArrowButton';

import useCoins, {currencies} from './hooks/useCoins';

function App() {
    const [currencyIndex, setCurrencyIndex] = useState(0);
    const [filter, setFilter] = useState('');

    const coins = useCoins(currencies[currencyIndex].name);

    return (
        <div className='App'>
            <ArrowButton/>
            <div className='container'>
                <div className='header'>
                    <h1>Crypto Price Tracker</h1>
                    <Controls
                        filter={filter}
                        currencyIndex={currencyIndex}
                        setCurrencyIndex={setCurrencyIndex}
                        setFilter={setFilter}
                    />
                </div>
                <div className='content'>
                    {coins.length === 0
                        ? <div className='loading-icon-wrapper'>
                            <div className='loading-icon'/>
                        </div>
                        : <CoinsTable coins={coins} filter={filter} currencySymbol={currencies[currencyIndex].symbol}/>}

                </div>
                <div className='footer'>
                    <div className='footer-symbols'>
                        <span>©</span>
                        <span>2022</span>
                        <span><a href='https://github.com/AnastasiaGalaxy'>github</a></span>
                    </div>
                    <div>Anastasia Galazhu</div>
                </div>
            </div>
        </div>
    );
}

export default App;





