import React, {useState} from 'react';
import Form from '../form/Form';

export default function Item(props) {

    const {itemName, itemType, price, available, _id, deleteItem, editItem} = props;

    const [toggleEdit, setToggleEdit] = useState(false);
    
    return (
        <div id={_id}>
            {!toggleEdit ? 
                <>
                    <h2>{itemName}</h2>
                    <h4>{itemType}</h4>
                    <p>${price}.00</p>
                    <p>{available ? 'In Stock' : 'Out of Stock'}</p>
                    <button onClick={() => deleteItem(_id)}>Delete</button>
                    <button onClick={() => setToggleEdit(prevToggle => !prevToggle)}>Edit</button>
                </>
            :
                <>
                    <Form itemName={itemName} itemType={itemType} price={price} available={available} _id={_id} buttonText='Update' submit={editItem} />
                    <button onClick={() => setToggleEdit(prevToggle => !prevToggle)}>Stop Editing</button>
                </>
            }
        </div>
    );
}
