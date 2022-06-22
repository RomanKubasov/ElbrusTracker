import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyFeedbackRequest } from '../../Redux/actions/myFeedbackAction';

function MyFeedBack() {
  const dispatch = useDispatch();
  const { myFeedback, user } = useSelector((state) => state);
  const { id } = user;

  useEffect(() => {
    console.log('ID---->', user);
    dispatch(getMyFeedbackRequest(id));
  }, [id]);

  /* this try-catch code to be sure that user has at least one feedback */
  let type1metricExists;
  try {
    type1metricExists = (myFeedback.allFeedbacks.filter((el) => el.type_id === 1).length);
  } catch (err) {
    type1metricExists = false;
  }

  let type2metricExists;
  try {
    type2metricExists = (myFeedback.allFeedbacks.filter((el) => el.type_id === 2).length);
  } catch (err) {
    type2metricExists = false;
  }

  let type3metricExists;
  try {
    type3metricExists = (myFeedback.allFeedbacks.filter((el) => el.type_id === 3).length);
  } catch (err) {
    type3metricExists = false;
  }
  /* end of try-catch code */

  return (
    <>
      <div>{`Всего фидбеков: ${myFeedback.countFeedbacks}`}</div>
      <div>{`Кол-во людей, которые поделились фидбеком: ${myFeedback.countRespondents}`}</div>
      <br />

      {/* all metrics with number of votes in 'value' (for metrics with type 1 and 2) */}
      <h3>Сильные стороны</h3>
      {type1metricExists
        ? (
          myFeedback.allFeedbacks.filter((el) => el.type_id === 1)
            .map((el) => (<div key={el.id}>{`${el.metric} - ${el.value}`}</div>))
        )
        : <span>ваши коллеги не отметили сильных сторон</span>}

      <h3>Зоны для развития</h3>
      {type2metricExists
        ? (
          myFeedback.allFeedbacks.filter((el) => el.type_id === 2)
            .map((el) => (<div key={el.id}>{`${el.metric} - ${el.value}`}</div>))
        )
        : <span>ваши коллеги не отметили зон для развития</span>}

      {/* metric with all text feedbacks in 'value' (for metric with type 3) */}
      <h3>Также о вас дали следующие фидбеки:</h3>
      {type3metricExists
        ? (
          <div key={myFeedback.allFeedbacks.filter((el) => el.type_id === 3)[0].id}>
            {myFeedback.allFeedbacks.filter((el) => el.type_id === 3)[0].value
              .map((el) => (<li>{el}</li>))}
          </div>
        )
        : <span>о вас не оставили ни одного фидбека</span>}
    </>
  );
}

export default MyFeedBack;
