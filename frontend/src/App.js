import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
import TeacherMonitor from './Components/TeacherMonitor/TeacherMonitor';
import Randomizer from './Components/Randomizer/Randomizer';
import LearningProgram from './Components/LearningProgram/LearningProgram';
import SignInGit from './Components/SignIn/SignInGit';

function App() {
  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <div className="App">
      <MyNav />

      <div className="main">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="*" element={<Page404 />} />
          <Route path="myfeedback" element={<MyFeedBack />} />
          <Route path="feedback" element={<FeedBack />} />
          <Route path="myprogress" element={<MyProgress />} />
          <Route path="lostbutton" element={<LostButton />} />
          <Route path="teachermonitor" element={<TeacherMonitor />} />
          <Route path="randomizer" element={<Randomizer />} />
          <Route path="learningprogram" element={<LearningProgram />} />
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
