import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyFeedbackRequest } from '../../Redux/actions/myFeedbackAction';

function MyFeedBack() {
  const dispatch = useDispatch();
  const { myFeedback } = useSelector((state) => state);
  const id = 4; // change for User ID

  useEffect(() => {
    if (!myFeedback.length) {
      dispatch(getMyFeedbackRequest(id));
    }
  }, []);

  return (
    <>
      <div>{`Всего фидбеков: ${myFeedback.countFeedbacks}`}</div>
      <div>{`Кол-во людей, которые поделились фидбеком: ${myFeedback.countRespondents}`}</div>
      <br />
      <h3>Сильные стороны</h3>
      {myFeedback.allFeedbacks.filter((el) => el.type_id === 1)
        .map((el) => (<div key={el.id}>{`${el.metric} - ${el.value}`}</div>))}
      <h3>Зоны для развития</h3>
      {myFeedback.allFeedbacks.filter((el) => el.type_id === 2)
        .map((el) => (<div key={el.id}>{`${el.metric} - ${el.value}`}</div>))}
      <h3>Также о вас дали следующие фидбеки:</h3>
      <div key={myFeedback.allFeedbacks.filter((el) => el.type_id === 3)[0].id}>
        {myFeedback.allFeedbacks.filter((el) => el.type_id === 3)[0].value
          .map((el) => (<li>{el}</li>))}
      </div>
    </>
  );
}

export default MyFeedBack;
