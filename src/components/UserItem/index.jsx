import React from 'react';

const UserItem = props => {
    const {
        onSelectUsers,
        user:{id,fName,lName},
    } = props;
    return(
        <li>
            <span>UserID: "{id}" UserFullName:"{fName} {lName}";</span>
            <input type="checkbox" onChange={onSelectUsers}/>
            
        </li>
    );
};
export default UserItem;