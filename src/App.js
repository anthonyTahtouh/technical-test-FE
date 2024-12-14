import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './pages/Dashboard';
import SharedLinkView from './components/SharedLinkView';
import NotFound from './pages/NotFound';
import FileDetails from './components/FileUpload/FileDetails';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/view/:id" element={<SharedLinkView />} />
      <Route path="/file/:id" element={<FileDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);

export default App;
