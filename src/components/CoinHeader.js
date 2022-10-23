import './CoinHeader.css';
import './CoinsTable.css';

const supportedSortingOptions = ['ascending', 'descending', undefined];

const CoinHeader = (props) => {
    const createClassName = (sorting) => {
        if (!supportedSortingOptions.includes(sorting)) {
            throw new Error(`Unsupported sorting option '${sorting}'`);
        }

        if (sorting === undefined) {
            return 'unsorted';
        }
        return sorting;
    };

    if (props.title === null) {
        return <th/>;
    } else {
        return (
            <th className='coin-column-name' onClick={props.onClick}>
                <div className='th-to-prettier'>
                    <div>{props.title}</div>
                    <div className={'sort-symbol-color ' + createClassName(props.sorting)}/>
                </div>

            </th>
        );
    }
};

export default CoinHeader;