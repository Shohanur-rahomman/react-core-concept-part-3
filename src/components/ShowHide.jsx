import React, { useState } from 'react';

const ShowHide = () => {
    const [Show, setShow] = useState(true);
    const handleShow = () => {
        setShow(!Show)
    }
    return (
        <div>
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