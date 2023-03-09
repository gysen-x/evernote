import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Homepage from '../Homepage/Homepage';
import Profile from '../Profile/Profile';

export default function Private() {
  const isAuth = useSelector((state) => state.user?.isAuth);

  return (
    <Routes>
      {isAuth && <Route path="/profile" element={<Profile />} />}
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}
