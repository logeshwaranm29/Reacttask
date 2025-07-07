import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserDetail() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(error => console.error("Error fetching user:", error));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ marginLeft:"500px",marginTop:"100px",padding:"30px",backgroundColor:"azure",color:"black",borderRadius:"30px",maxWidth:"500px"}}>
      <h2>User Detail</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
      <p><strong>Company:</strong> {user.company?.name}</p>
      <p><strong>City:</strong> {user.address?.city}</p>
    </div>
  );
}

export default UserDetail;
