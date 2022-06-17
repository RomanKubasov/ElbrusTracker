import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import FeedbackPage from './Components/FeedbackPage/FeedbackPage';
import MainPage from './Components/MainPage/MainPage';
import MyFooter from './Components/MyFooter/MyFooter';
import MyNav from './Components/MyNav/MyNav';
import ProgressPage from './Components/ProgressPage/ProgressPage';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <MyNav />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>

      <MyFooter />
    </div>
  );
}

export default App;
