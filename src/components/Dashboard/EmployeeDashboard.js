import React from 'react';
import Header from '../../Others/Header';
import TaskListNumbers from '../../Others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({ data }) => {

  return (
    <div className='p-10 h-screen'>
      <Header data={data} />
      <TaskListNumbers data={data} />
      <TaskList />
    </div>
  );
}


export default EmployeeDashboard;