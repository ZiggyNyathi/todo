import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
//import axios from 'axios';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ data}) => {

const { Dashboard} = data
//const navigate = useNavigate()
const { isAuthenticated } = useSelector((state)=> state.auth)
// useEffect(() => {

//   isAuthenticated();
// }, []);


// const isAuthenticated = async () => {
//   try {
//     const response = await axios.get('http://localhost:8000/users');
//     const users = response.data;

//     const matchedUser = users.find(
//       (user) => user.email === email && user.password === password 
//     );

//     if(!matchedUser){
//     return navigate("/login")
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// useEffect(()=>{
// isAuthenticated()

// },[])

  // const isLoggedIn = false; // Replace with your authentication logic

  //   if (!isLoggedIn) {
  //     // User is not logged in, redirect to /login
  //     navigate('/login');
  //     return null;
  //   }

  return (
    <>
    {isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />}
    </>
);
};

export default PrivateRoute;
