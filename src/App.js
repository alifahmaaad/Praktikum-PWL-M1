import React, { useState } from 'react';
import './App.css';
import Login from './components/Loginform'


function App() {
  // const adminUsr={
  //   email:"admin@admin.com",
  //   password:"admin"
  // }
  // const [user,setUser]=useState({email:"",password:""})
  // // const Login = details =>{
  // //   console.log(details);
  // // }
  return (
    <div className="App">
        <h2>
          LOGIN
        </h2>
        <Login/>
    </div>
  );
}

export default App;