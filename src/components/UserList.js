import React from 'react';
import useResources from './useResources';

const UserList = () => {
  const resources = useResources('users');
  return (
    <ul>
      {resources.map(user => <li>{user.name}</li>)}
    </ul>
  );
}

export default UserList;