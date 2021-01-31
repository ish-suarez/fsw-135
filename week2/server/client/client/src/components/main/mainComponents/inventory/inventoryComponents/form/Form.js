import React, {useState} from 'react';

import './form.css';

export default function Form(props) {

    const initialInputs = {itemName: props.itemName || '' , itemType: props.itemType  || '' , price: props.price || undefined, available: props.available || undefined};
    const [inputs, setInputs] = useState(initialInputs);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value}));
    }

    const handleRadio = (e) => {
        const available = e.target.value === 'true' ? true : false
        setInputs(prevInputs => ({...prevInputs, available: available}));
    }

    const formSubmit = (e) => {
        e.preventDefault();
        props.submit(inputs, props._id);
        setInputs(initialInputs);
    }

    return (
        <form onSubmit={formSubmit}>
            <input 
                    type='text' 
                    name='itemName' 
                    value={inputs.itemName} 
                    onChange={handleChange} 
                    placeholder='Name of Item'
                    required
                />
                <input 
                    type='text' 
                    name='itemType' 
                    value={inputs.itemType} 
                    onChange={handleChange} 
                    placeholder='Items Type'
                    required
                />
                <input 
                    type='number' 
                    name='price' 
                    value={inputs.price} 
                    onChange={handleChange} 
                    placeholder='$ Price'
                    required
                />
                <div className='radio-container'>
                    <span> Is Available</span>
                    <input 
                        type='radio' 
                        name='available' 
                        value='true'
                        onChange={handleRadio}
                        checked={inputs.available === true} 
                    />
                    <span>Is Not Available</span>
                    <input 
                        type='radio' 
                        name='available' 
                        value='false' 
                        onChange={handleRadio}
                        checked={!inputs.available === true}  
                    />
                </div>
                <button className='form-button'>{props.buttonText}</button>
        </form>
    );
}
