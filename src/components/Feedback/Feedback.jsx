// import css from './Feedback.module.css'

const Feedback = ({ value, total, totalPositivePercentage }) => {
  return (
    <div>
      <p>Good: {value.good}</p>
      <p>Neutral: {value.neutral}</p>
      <p>Bad: {value.bad}</p>
      <p>Total: {total}</p>
      <p>Positive percentage: {totalPositivePercentage}%</p>
    </div>
  );
};

export default Feedback;