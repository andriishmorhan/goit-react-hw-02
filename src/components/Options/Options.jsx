// import css from './Options.module.css'/

export default function Options ({ onUpdateFeedback, totalFeedback, onResetFeedback }) {
return (
        <div>
         <button onClick={() => onUpdateFeedback("good")}>Good</button>
          <button onClick={() => onUpdateFeedback("neutral")}>Neutral</button>
    <button onClick={() => onUpdateFeedback("bad")}>Bad</button>
     {totalFeedback > 0 && <button onClick={onResetFeedback}>Reset</button>}
       </div>
    )
}