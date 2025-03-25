import React, { use } from 'react';
import '../App.css'
import Mane from './Mane';

const allMens = ({ allData }) => {
    const maneData = use(allData);
    console.log(maneData);
    return (
        <div>
            {
                maneData.map(mane => <Mane key={mane.id} mane={mane}></Mane>)
            }
        </div>
    );
};

export default allMens;