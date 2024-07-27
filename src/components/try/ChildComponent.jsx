import React from 'react';

function ChildComponent({ updateData }) {
  const handleChange = () => {
    updateData('Updated Data');
  };

  return (
    <div>
      <button onClick={handleChange}>Update Data</button>
    </div>
  );
}

export default ChildComponent;
