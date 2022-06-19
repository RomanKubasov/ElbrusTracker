import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import MyFooter from './Components/MyFooter/MyFooter';
import reduxStore from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </BrowserRouter>,
);
