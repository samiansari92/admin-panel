// src/routes/index.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '../layouts/Layout';
import Dashboard from '../pages/Dashboard/Dashboard';
import Astrologer from '../pages/Astrologer/Astrologer';


const AppRoutes = () => (
  <Router>
    <Routes>
      {/* Layout route */}
      <Route path="/" element={<Layout />}>
        {/* Nested routes inherit layout */}
        <Route index element={<Dashboard />} />
        <Route path="astrologer" element={<Astrologer />} />
      
        {/* More nested routes */}
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;
