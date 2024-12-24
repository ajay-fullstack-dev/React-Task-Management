import React from 'react';

const TaskList = () => {
  return (
    <div className='h-[55%] w-full overflow-x-auto items-center gap-5 justify-start py-5 flex mt-10'>
      <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='bg-red-600 text-sm px-3 py-1 rounded'>12 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a sample program</h2>
        <p className='text-sm mt-2'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>
      </div>

      <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='bg-red-600 text-sm px-3 py-1 rounded'>12 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a sample program</h2>
        <p className='text-sm mt-2'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>
      </div>

      <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='bg-red-600 text-sm px-3 py-1 rounded'>12 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a sample program</h2>
        <p className='text-sm mt-2'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>
      </div>

      <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h4 className='bg-red-600 text-sm px-3 py-1 rounded'>12 Feb 2024</h4>
        </div>
        <h2 className='mt-5 text-xl font-semibold'>Make a sample program</h2>
        <p className='text-sm mt-2'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </p>
      </div>
    </div>
  );
};

export default TaskList;