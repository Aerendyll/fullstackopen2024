import React from 'react'

 const Notication = ({message}) => {
  if(message === null){
    return null
  }
  return (
    <div className='notification'>
      {message}
      </div>
  )
}

export default Notification