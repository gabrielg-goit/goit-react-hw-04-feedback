import propTypes from 'prop-types';
import style from './Feedback.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option, index) => (
      <button
        key={index}
        onClick={() => onLeaveFeedback(option)}
        className={style.feedbackBtn}
      >
        {option}
      </button>
    ))}
  </div>
);

Feedback.propTypes = {
  options: propTypes.arrayOf(propTypes.string).isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
