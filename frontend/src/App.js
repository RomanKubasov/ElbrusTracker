import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import MyFooter from './Components/MyFooter/MyFooter';
import MyNav from './Components/MyNav/MyNav';

function App() {
  return (
    <div className="App">
      <MyNav />

      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <MyFooter />
    </div>
  );
}

export default App;
