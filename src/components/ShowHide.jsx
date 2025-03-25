import React, { useState } from 'react';
import '../App.css'

const ShowHide = () => {
    const [Show, setShow] = useState(true);
    const handleShow = () => {
        setShow(!Show)
    }
    return (
        <div className='box'>
            {
                Show && <h2>Learn react</h2>
            }
            <button onClick={handleShow}>
                {
                    Show ? "show": "hide"
                }
            </button>
        </div>
    );
};

export default ShowHide;