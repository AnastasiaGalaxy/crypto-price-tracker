import CoinRow from './CoinRow';
import './CoinsTable.css';
import {useEffect, useState} from 'react';
import CoinHeader from './CoinHeader';

const Order = {
    ascending: 'ascending',
    descending: 'descending',
};

const headerFields = [
    {
        title: 'Coins',
        fieldName: 'name'
    },
    {
        title: null,
        fieldName: null
    },
    {
        title: 'Price',
        fieldName: 'current_price'
    },
    {
        title: 'Volume',
        fieldName: 'total_volume'
    },
    {
        title: 'Change',
        fieldName: 'price_change_percentage_24h'
    },
    {
        title: 'Mkt.Cap.',
        fieldName: 'market_cap'
    }
];

const CoinsTable = (props) => {
    const [coins, setCoins] = useState(props.coins);
    const [sortOptions, setSortOptions] = useState({fieldName: 'market_cap', order: Order.descending});

    const defineSortOptions = (fieldName) => {
        if (sortOptions.fieldName === fieldName) {
            const newOrder = sortOptions.order === Order.ascending ? Order.descending : Order.ascending;
            setSortOptions({fieldName: fieldName, order: newOrder});
        } else {
            setSortOptions({fieldName: fieldName, order: Order.ascending});
        }
    };

    useEffect(() => {
        if (!sortOptions.order) {
            return;
        }

        const newCoins = [...props.coins];

        const fieldName = sortOptions.fieldName;

        if (newCoins.length === 0) {
            return;
        }
        const type = typeof newCoins[0][fieldName];

        function createSort(type, order) {
            const n = order === Order.ascending ? 1 : -1;

            if (type === 'string') {
                return (a, b) => n * a[fieldName].localeCompare(b[fieldName]);
            } else if (type === 'number') {
                return (a, b) => n * (a[fieldName] - b[fieldName]);
            }
        }

        const sort = createSort(type, sortOptions.order);

        newCoins.sort(sort);
        setCoins(newCoins);
    }, [sortOptions, props.coins]);  // all the states that are used in useEffect need to be in dependencies

    return (
        <table>
            <thead>
            <tr className='table-header'>
                {headerFields
                    .map(field => (
                        <CoinHeader key={field.title} title={field.title}
                                    sorting={field.fieldName === sortOptions.fieldName ? sortOptions.order : undefined}
                                    onClick={() => {
                                        defineSortOptions(field.fieldName);
                                    }}/>))}
            </tr>
            </thead>

            <tbody>
            {coins.filter(coin => (coin.name.toLowerCase().includes(props.filter.toLowerCase()) || props.filter === ''))
                .map(coin => (
                        <CoinRow key={coin.id} coin={coin} currencySymbol={props.currencySymbol}/>
                    )
                )}
            </tbody>
        </table>
    );
};

export default CoinsTable;