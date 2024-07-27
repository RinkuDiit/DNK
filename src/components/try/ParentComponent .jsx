import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import { Link } from 'react-router-dom';

function ParentComponent() {
  const [data, setData] = useState('Initial Data');

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Data: {data}</p>
      <Link to='/child'><button>child</button></Link>
      <ChildComponent updateData={updateData} />
    </div>
  );
}

export default ParentComponent;
