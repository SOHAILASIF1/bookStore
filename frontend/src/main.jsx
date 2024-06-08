import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthContext.jsx';

const rootElement = document.getElementById('app');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
    <AuthProvider>
    <div className='dark:bg-slate-900 dark:text-white'>
      <App />
    </div>
    </AuthProvider>
    </BrowserRouter>
    
    

  );
}
