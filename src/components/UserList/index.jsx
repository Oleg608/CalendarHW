import React from 'react';
import UserItem from '../../components/UserItem';
import styles from './UserList.module.scss';
     /*
         
        ////*/
const UserList = (props) => {
     const { users, setUsers } = props;
  const mapUser = (user, index) => {
    const selectUsersHandler = () => {
      const Checkboxes = document.querySelectorAll("input[type='checkbox']");
            for(const elem of Array.from(Checkboxes)){
                elem.checked ? elem.parentElement.classList = "checkedItem" : elem.parentElement.classList = "";
            }
      const newUsers = [...users];
      newUsers[index].isSelected = !newUsers[index].isSelected;
      setUsers(newUsers);
    };
    return (
      <UserItem
        key={user.id}
        user={user}
        onSelectUsers={selectUsersHandler}
        isSelected={user.isSelected}
      />
    );
  };
  return <ul> {users.map(mapUser)} </ul>;
};

export default UserList;