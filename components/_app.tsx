import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure App is defined in './App.tsx' or './App.jsx'
import './index.css'; // Global CSS styles

// Access the root element in the DOM
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Render the React application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
