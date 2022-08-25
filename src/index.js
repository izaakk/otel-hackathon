import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; 
import Dashboard from './Dashboard';
import Profile from './Profile';
import Faq from './Faq';
import CreateEnv from './CreateEnv';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/create-env' element={<CreateEnv />} />
      </Routes>
    </BrowserRouter>
    {/* <Dashboard /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();