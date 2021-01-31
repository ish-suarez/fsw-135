import React, {useState} from 'react';

export default function OneItem(props) {

    const {_id, itemName, itemType, price, available} = props;

    return (
        <div id={_id}>
            <h2>{itemName}</h2>
            <h4>{itemType}</h4>
            <p>{price}</p>
            <p>{available ? 'In Stock' : 'Out of Stock'}</p>
        </div>
    );
}


