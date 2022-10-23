import './ArrowButton.css';

const ArrowButton = () => {
    let arrowButton = document.getElementById('arrow-up');
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        const scrollPointPx = 300;

        if (document.documentElement.scrollTop > scrollPointPx) {
            arrowButton.style.display = 'block';
        } else {
            arrowButton.style.display = 'none';
        }
    }

    return (
        <img alt='arrow-up' src='arrow-up.png' id='arrow-up' width='50'
             height='50' onClick={e => {
            e.preventDefault();
            window.scrollTo(0, 0);
        }}/>
    );
};
export default ArrowButton;




