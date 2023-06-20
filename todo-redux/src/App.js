import React from 'react';
import { Routes,Route, Navigate } from 'react-router-dom';
import {NotFound} from './NotFound';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import Dashboard from './todolist/App';
import Register from './Register';
import { useSelector } from 'react-redux';
import "./todolist/index.css"




const App = () => {

  const { email, password} = useSelector((state) => state.auth)
  // const [email,] = useState('');
  // const [password,] = useState('');

  // const navigate = useNavigate();
  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8000/users');
  //     const users = response.data;

  //     const matchedUser = users.find(
  //       (user) => user.email === email && user.password === password 
  //     );

  //     console.log(users)
  //     if (matchedUser) {
        
  //       alert('Login successful!');
  //       navigate('/dashboard');
  //     } else {
  //       alert('Invalid email or password');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  

  return (
      
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login data={{ email, password}} />} />
          <Route path="/register" element={<Register />} />
          <Route  path="/dashboard" element={<PrivateRoute   data={{ Dashboard,email, password}}/>} />
          <Route path="*" element={<NotFound  />} />
          
          </Routes>
      
  );
};

export default App;
