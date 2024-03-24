import React from 'react';

const FilterNumber = ({ value, onChange }) => {
  return (
    <div className='Filter'>
      Filter by name:
      <input value={value} onChange={onChange} />
    </div>
  );
}

export default FilterNumber;
