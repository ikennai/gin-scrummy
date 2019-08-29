import React from 'react';

const ScrummyCard = props => (
    <div className="gin-scrummy__card" onClick={() => props.handleClick(props.card)}>
        { props.card.value }
    </div>
);

export default ScrummyCard;
