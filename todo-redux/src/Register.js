
import { useNavigate, Link } from 'react-router-dom';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { register } from './features/auth/authSlice';
import { setPassword,setUsername } from './features/auth/authSlice';


const Register = () => {

  const { email, password } = useSelector((state) => state.auth);
const state = useSelector((state) => state.auth);
console.log(state)
const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(() => {
  // Perform any necessary side effects here when email or password changes
}, [email, password]);

const handleRegister = () => {
  
  dispatch(register())
    .then((result) => { 
      if (result.payload.success) {
        alert('Registration successful!');
    navigate('/login');
        
      } else {
        alert('Registration failed: Email already exists');
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
  return (
    <div className='login-container'> 
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Email"
        className='input-field'
        value={email}
        onChange={(e) =>dispatch(setUsername(e.target.value))}
      />
      <input
        type="password"
        placeholder="Password"
        className='input-field'
        value={password}
        onChange={(e) => dispatch(setPassword(e.target.value))}
      />
      <button className='login-button' onClick={() => handleRegister()}>Register</button>
      <p>Already have an account sign in <Link to="/login" >here</Link></p>
    </div>
  );
};

export default Register;
