import React from 'react'

const Header = (props) => {
  const user = props.data;

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{user.firstName} 👋</span></h1>
      <button className='bg-red-500 text-white px-2 py-2'> Logout</button>
    </div>
  );
}

export default Header