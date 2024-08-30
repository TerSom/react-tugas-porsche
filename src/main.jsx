import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import RegisterPage from './register.jsx';
import LoginPage from './login.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/test-porche/" element={<LoginPage />} />
        <Route path="/test-porche/register" element={<RegisterPage />} />
        <Route path="/test-porche/home" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
