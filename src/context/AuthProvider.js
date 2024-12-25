import React, {useEffect, useState, createContext} from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null)

  useEffect(()=> {
    try {
      setLocalStorage(); // initialize or update local storage

      //fetch and set user data local storage 
      const {employees, admin } = getLocalStorage();
      setUserData({employees, admin})
    } catch (error){
      console.error("Error Fetching user data from localStorage", error);
    }

  },[])

  return (
    <div>
      <AuthContext.Provider value={userData}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;