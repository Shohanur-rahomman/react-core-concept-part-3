import React from 'react';

const User = ({ user }) => {
    const { name, email } = user
    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default User;