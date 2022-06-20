import React, { useEffect } from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
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
import TeacherMonitor from './Components/TeacherMonitor/TeacherMonitor';
import Randomizer from './Components/Randomizer/Randomizer';
import LearningProgram from './Components/LearningProgram/LearningProgram';
import SignInGit from './Components/SignIn/SignInGit';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUser());
  }, []);

  return (
    <div className="App">
      <MyNav />

      <Routes>
        <Route path="/login" element={<SignInGit />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="progress" element={<ProgressPage />} />
        <Route path="*" element={<Page404 />} />
        <Route path="myfeedback" element={<MyFeedBack />} />
        <Route path="feedback" element={<FeedBack />} />
        <Route path="myprogress" element={<MyProgress />} />
        <Route path="lostbutton" element={<LostButton />} />
        <Route path="teachermonitor" element={<TeacherMonitor />} />
        <Route path="randomizer" element={<Randomizer />} />
        <Route path="learningprogram" element={<LearningProgram />} />
      </Routes>

      <MyFooter />
    </div>
  );
}

export default App;
