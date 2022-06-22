import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMyFeedbackRequest } from '../../Redux/actions/myFeedbackAction';
import style from './MyFeedBack.module.css';

function MyFeedBack() {
  const dispatch = useDispatch();
  const { myFeedback, user } = useSelector((state) => state);
  const { id } = user;

  useEffect(() => {
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
    <div className={style.myFeedBack__container}>
      <div className={style.myFeedBack__total}>
        <p className={style.myFeedBack__totalInner}>
          <span>Всего фидбеков:</span>
          <b>
            {`${myFeedback.countFeedbacks}`}
          </b>
        </p>
      </div>
      <div className={style.myFeedBack__totalPeople}>
        <p className={style.myFeedBack__totalInner}>
          <span>Кол-во людей, которые поделились фидбеком:</span>
          <b>
            {`${myFeedback.countRespondents}`}
          </b>
        </p>
      </div>

      {/* all metrics with number of votes in 'value' (for metrics with type 1 and 2) */}
      <div className={style.myFeedBack__block}>
        <h3 className={style.myFeedBack__title}>Сильные стороны</h3>
        {type1metricExists
          ? (
            myFeedback.allFeedbacks.filter((el) => el.type_id === 1)
              .map((el) => (<div key={el.id}>{`${el.metric} - ${el.value}`}</div>))
          )
          : (
            <span className={style.myFeedBack__description}>
              - Ваши коллеги не отметили сильных сторон
            </span>
          )}
      </div>

      <div className={`${style.myFeedBack__block} ${style.myFeedBack__block2}`}>
        <h3 className={style.myFeedBack__title}>Зоны для развития</h3>
        {type2metricExists
          ? (
            myFeedback.allFeedbacks.filter((el) => el.type_id === 2)
              .map((el) => (<div key={el.id}>{`${el.metric} - ${el.value}`}</div>))
          )
          : (
            <span className={style.myFeedBack__description}>
              - Ваши коллеги не отметили зон для развития
            </span>
          )}
      </div>

      {/* metric with all text feedbacks in 'value' (for metric with type 3) */}
      <div className={`${style.myFeedBack__block} ${style.myFeedBack__block3}`}>
        <h3 className={style.myFeedBack__title}>Также о вас дали следующие фидбеки:</h3>
        {type3metricExists
          ? (
            <div key={myFeedback.allFeedbacks.filter((el) => el.type_id === 3)[0].id}>
              {myFeedback.allFeedbacks.filter((el) => el.type_id === 3)[0].value
                .map((el) => (<li>{el}</li>))}
            </div>
          )
          : (
            <span className={style.myFeedBack__description}>
              - О вас не оставили ни одного фидбека...
            </span>
          )}
      </div>
    </div>
  );
}

export default MyFeedBack;
