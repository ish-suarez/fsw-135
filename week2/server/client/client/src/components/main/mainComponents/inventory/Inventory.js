import React, {useState, useEffect} from 'react';
import axios from 'axios';
import _ from '../../../../../node_modules/lodash';

import Item from '../item/Item';
import Form from '../form/Form';

export default function Inventory() {

    const [inventory, setInventory] = useState([]);

    const addItem = newItem => {
        axios.post('/inventory', newItem)
            .then(res => {
                setInventory(prevInventory => [res.data, ...prevInventory]);
            })
            .catch(err => console.log(err));
    }

    const getInventory = () => {
        axios.get('/inventory')
            .then(res => setInventory(res.data))
            .catch(err => console.log(err));
    }

    const deleteItem = itemId => {
        axios.delete(`/inventory/${itemId}`)
            .then(res => {
                setInventory(prevInventory => _.filter(prevInventory, item => item._id !== itemId));
            })
            .catch(err => console.log(err));
    }

    const editItem = (updates, itemId) => {
        axios.put(`/inventory/${itemId}`, updates)
            .then(res => {
                setInventory(prevInventory => _.map(prevInventory, item => item._id !== itemId ? item : res.data));
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    const handleFilter = e => {
        e.target.value === 'reset' ?
            getInventory()
        :
        axios.get(`/inventory/search/itemType`, {params: {itemType: e.target.value}})
            .then(res => setInventory(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getInventory();
    }, []);

    return (
        <div className='inventory-container'>
            <Form submit={addItem} buttonText='Add New Item'/>
            <h4>Filter by Type of Item</h4>
            <select onChange={handleFilter}>
                <option value='reset'>All of Stock</option>
                <option value='decore'>Decore</option>
                <option value='furniture'>Furniture</option>
                <option value='electronics'>Electronics</option>
                <option value='appliance'>Appliance</option>
                <option value='kitchen'>Kitchen</option>
                <option value='bedroom'>Bedroom</option>
                <option value='office supplies'>Office Supplies</option>

            </select>
            {_.map(inventory, item => <Item {...item} key={item.itemName} deleteItem={deleteItem} editItem={editItem} />)}
        </div>
    );
}
