import React from 'react';
import '../App.css'



const Mane = ({ mane }) => {
    const { name, company,address } = mane;
    return (
        <div className='box'>
            <h2>mane name : {name}</h2>
            <p> Company name :{company.name} </p>
            <p> Company city :{address.city} </p>
        </div>
    );
};

export default Mane;