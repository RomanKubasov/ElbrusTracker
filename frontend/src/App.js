import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkUser } from './Redux/actions/userAction';
import MainPage from './Components/MainPage/MainPage';
import MyFooter from './Components/MyFooter/MyFooter';
import MyNav from './Components/MyNav/MyNav';
import ProgressPage from './Components/ProgressPage/ProgressPage';
import SignIn from './Components/SignIn/SignIn';
import Page404 from './Components/Page404/Page404';
import MyFeedBack from './Components/MyFeedBack/MyFeedBack';
import FeedBack from './Components/FeedBack/FeedBack';
import MyProgress from './Components/MyProgress/MyProgress';
import LostButton from './Components/LostButton/LostButton';
import Randomizer from './Components/Randomizer/Randomizer';
import SignInGit from './Components/SignIn/SignInGit';
// import AuthRouter from './Components/AuthRouter/AuthRouter';
// import AuthTeacherRouter from './Components/AuthTeacherRouter/AuthTeacherRouter';
// import AuthStudentRouter from './Components/AuthStudentRouter/AuthStudentRouter';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <div className="App">
      <MyNav />

      <div className="main">
        <Routes>
          <Route path="progress" element={<ProgressPage />} />
          <Route path="myprogress" element={<MyProgress />} />
          <Route path="myfeedback" element={<MyFeedBack />} />
          <Route path="feedback" element={<FeedBack />} />
          <Route path="lostbutton" element={<LostButton />} />
          <Route path="randomizer" element={<Randomizer />} />
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/loginwithgithub" element={<SignInGit />} />
          <Route path="/loginwithpass" element={<SignIn />} />
        </Routes>
      </div>

      <MyFooter />
    </div>
  );
}

export default App;
