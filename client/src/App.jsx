import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Private from './components/Private/Private';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

import { setUser } from './store/actions';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function checkAuth() {
      const response = await fetch('/auth/check', {
        credentials: 'include',
      });
      const result = await response.json();
      const { id, name } = result;
      if (!result.fail) {
        dispatch(setUser({ id, name, isAuth: true }));
      } else {
        navigate('/signin');
      }
    }
    checkAuth();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/*" element={<Private />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
