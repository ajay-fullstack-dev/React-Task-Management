import React, { useState, useContext } from 'react';
import './App.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {

  const [user, setUser] = useState(null)
  const AuthData = useContext(AuthContext)
  const handleLogin = (email, password) => {
    if(email === "admin@example.com" && password === "123456"){
      setUser('admin');
    }else if (email === "employee@example.com" && password === "123456") {
      setUser('user')
    }else{
      alert('Invalid detail!');
    }
  }

  
  

  return (
    <div className="App">
      {!user ? <Login handleLogin={handleLogin} /> : "" }
      {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard /> }
    </div>
  );
}

export default App;
