import React, { useState, useContext, useEffect } from 'react';
import './App.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const [user, setUser] = useState(null)
  const [currentUserData, setcurrentUserData] = useState(null)
  const AuthData = useContext(AuthContext)
  
  // useEffect(()=> {
  //   if (AuthData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if (loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[])

  const handleLogin = (email, password) => {
    const admin = AuthData.admin.find((e) => e.email === email && e.password === password)
    const employee = AuthData.employees.find((e) => e.email === email && e.password === password)
    
    if(admin){
      setUser('admin');
      setcurrentUserData(admin)
      localStorage.setItem('loggedInUser',JSON.stringify({role: 'admin'}));
    }else if (employee) {
      setUser('employee')
      setcurrentUserData(employee)
      localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee'}))
    }else{
      alert('Invalid detail!');
    }
  }

  return (
    <div className="App">
      {!user ? <Login handleLogin={handleLogin} /> : "" }
      { user === 'admin' ? <AdminDashboard /> : (user === 'employee' ? <EmployeeDashboard data={currentUserData} /> : null) }
    </div>
  );
}

export default App;
