import React from 'react';
import './type.css';

export default function Type(props) {

    const {handleFilter} = props;

    return (
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
    );
}

