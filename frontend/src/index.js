import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import './index.css';
import App from './App';
import reduxStore from './Redux/store';
import WSContextProvider from './Components/Context/Context';

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <WSContextProvider>
        <App />
      </WSContextProvider>
    </Provider>
  </BrowserRouter>,
);
