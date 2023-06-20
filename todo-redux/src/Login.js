//import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
//import axios from 'axios';
import "./Login.css"; 
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from './features/auth/authSlice';
//import {  } from './features/auth/authSlice';
import { setPassword,setUsername, setAuth } from './features/auth/authSlice';

import { useEffect } from 'react';
const Login = ({data}) => {

//const {email,setUsername, password, setPassword, handleLogin} = data
const { email, password } = useSelector((state) => state.auth);
const state = useSelector((state) => state.auth);
console.log(state)
const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(() => {
  // Perform any necessary side effects here when email or password changes
}, [email, password]);

const handleLogin = () => {
  
  dispatch(login())
    .then((result) => { 
      if (result.payload.success) {
        alert('Login successful!');
        navigate('/dashboard');
        dispatch(setAuth())
      } else {
        alert('Invalid email or password');
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
console.log(email, password,login, setPassword, setUsername)
  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="email"
        placeholder="email"
        className="input-field"
        value={email}
        onChange={(e) => dispatch(setUsername(e.target.value))}
      />
      <input
        type="password"
        placeholder="Password"
        className="input-field"
        value={password}
        onChange={(e) => dispatch(setPassword(e.target.value))}
      />
      <button className="login-button" onClick={() => handleLogin()}>Login</button>
    
    <p>Don't have an account sign up <Link to="/register" >here</Link></p>
    </div>

  );
};




export default Login;
