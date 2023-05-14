import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const UserOne = () => {
  const params = useParams();
  const { name } = params;
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <p>this is user {name} page</p>
    </div>
  )
}

export default UserOne
