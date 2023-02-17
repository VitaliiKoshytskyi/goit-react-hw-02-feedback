// import PropTypes from 'prop-types';

// import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <h1 className="Feedback__heading">Please leave feedback</h1>
      <ul className="Feedback__list">
        {options.map(option => {
          return (
            <li key={option} className="Feedback__item">
              <button
                className="Feedback__btn-good"
                type="button"
                onClick={() => onLeaveFeedback(option)}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FeedbackOptions;
