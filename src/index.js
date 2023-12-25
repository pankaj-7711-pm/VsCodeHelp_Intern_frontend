import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { DetailsProvider } from './Context/details';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DetailsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DetailsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
