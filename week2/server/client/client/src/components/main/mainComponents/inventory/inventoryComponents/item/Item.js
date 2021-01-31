import React, {useState} from 'react';
import Form from '../form/Form';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons'

import './item.css';

export default function Item(props) {

    const {itemName, itemType, price, available, _id, deleteItem, editItem, getById} = props;

    const [toggleEdit, setToggleEdit] = useState(false);
    
    return (
        <div className='item-container'>
            {!toggleEdit ? 
                <div className='item-card'>
                    <h2 onClick={() => getById(_id)}>{itemName}</h2>
                    <span className='category'>Category:</span> <h4>{itemType}</h4>
                    <p>${price}.00</p>
                    <p>{available ? 'In Stock' : 'Out of Stock'}</p>
                    <button className='item-button' onClick={() => deleteItem(_id)}>Delete</button>
                    <button className='item-button' onClick={() => setToggleEdit(prevToggle => !prevToggle)}>Edit</button>
                </div>
            :
                <div className='update'>
                    <FontAwesomeIcon icon={faWindowClose} onClick={() => setToggleEdit(prevToggle => !prevToggle)} />
                    <Form itemName={itemName} itemType={itemType} price={price} available={available} _id={_id} buttonText='Update' submit={editItem} />
                </div>
            }
        </div>
    );
}
