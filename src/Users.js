import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import './App.css'

function Users() {
  const [users, setUsers] = useState([]);

   const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/user/${id}`);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {users.length > 0 ? (
        <table style={{marginLeft:"180px"}} border="1" cellPadding="10" cellSpacing="3" width="80%">
          <thead>
            <tr className='column'>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr style={{cursor:'pointer'}} key={user.id} onClick={()=> handleClick(user.id)} >
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
}

export default Users;
