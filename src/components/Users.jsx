import React, { use } from 'react';
import User from './User';

const Users = ({ usersData }) => {
    const usersCurrent = use(usersData) 
    console.log(usersCurrent);
    return (
        <div>
            {
                usersCurrent.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;