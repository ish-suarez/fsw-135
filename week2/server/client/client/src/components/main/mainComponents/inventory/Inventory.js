import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { map, filter } from 'lodash';

import './inventory.css';

import Item from './inventoryComponents/item/Item';
import Form from './inventoryComponents/form/Form';
import Type from './inventoryComponents/type/Type';


export default function Inventory() {
    // Setting inventory as an empty
    const [inventory, setInventory] = useState([]);

    // Add new item to the inventory
    const addItem = newItem => {
        axios.post('/inventory', newItem)
            .then(res => {
                setInventory(prevInventory => [res.data, ...prevInventory]);
            })
            .catch(err => console.log(err));
    }

    // Getting all inventory items
    const getInventory = () => {
        axios.get('/inventory')
            .then(res => setInventory(res.data))
            .catch(err => console.log(err));
    }

    // Get one by _id
    const getById = itemId => {
        axios.get('/inventory', {params: {_id: itemId}})
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    // Deleting and updating array of items
    const deleteItem = itemId => {
        axios.delete(`/inventory/${itemId}`)
            .then(res => {
                setInventory(prevInventory => filter(prevInventory, item => item._id !== itemId));
            })
            .catch(err => console.log(err));
    }

    // Edit one item
    const editItem = (updates, itemId) => {
        axios.put(`/inventory/${itemId}`, updates)
            .then(res => {
                setInventory(prevInventory => map(prevInventory, item => item._id !== itemId ? item : res.data));
                window.location.reload();
            })
            .catch(err => console.log(err));
    }

    // Filter by items type
    const handleFilter = e => {
        e.target.value === 'reset' ?
            getInventory()
        :
        axios.get(`/inventory/search/itemType`, {params: {itemType: e.target.value}})
            .then(res => setInventory(res.data))
            .catch(err => console.log(err));
    }

    // Use effect
    useEffect(() => {
        getInventory();
    }, []);

    return (
        <div className='inventory-container'>
            <Form submit={addItem} buttonText='Add New Item'/>
            <Type handleFilter={handleFilter} />
            {map(inventory, item => <Item {...item} key={item.itemName} deleteItem={deleteItem} editItem={editItem} getById={getById} />)}
        </div>
    );
}
