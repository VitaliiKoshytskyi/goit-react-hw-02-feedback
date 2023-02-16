import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className="Feedback__title">Statistics</h2>
      <p className="Feedback__text">
        Good:<span> {good}</span>
      </p>
      <p className="Feedback__text">
        Neutral:<span> {neutral}</span>
      </p>
      <p className="Feedback__text">
        Bad:<span> {bad}</span>
      </p>
      <p className="Feedback__text">
        Total:<span> {total}</span>
      </p>
      <p className="Feedback__text">
        Positive feedback: <span>{positivePercentage}%</span>
      </p>
    </>
  );
};

export default Statistics;
