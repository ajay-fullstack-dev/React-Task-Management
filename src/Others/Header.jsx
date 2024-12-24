import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'> 
      <h1 className='text-2xl font-medium'>Hello <br/> Ajay  </h1>
      <button className='bg-red-500 text-white px-2 py-2'> Logout</button>
    </div>
  );
}

export default Header