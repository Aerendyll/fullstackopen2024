
import React from 'react'

 function FilteredCountry({onChange}) {
  return (
    <div>
        <h3>Filter country: <input type="text" placeholder='country to search' onChange={onChange} /></h3>
    </div>

  )
}

export default FilteredCountry