import React from 'react';

const TaskList = () => {
  return (
    <div className='h-[55%] w-full overflow-x-auto items-center gap-5 justify-start py-5 flex mt-10'>
      <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
          <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>12 Feb 2024</h3>
        </div>
        <h2 className=''>Make a sample program</h2>
      </div>
    </div>
  );
};

export default TaskList;