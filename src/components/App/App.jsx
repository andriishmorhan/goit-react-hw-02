import { useState, useEffect } from 'react'
import './App.module.css'
import Description from '../Description/Description'
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';


export default function App() {
  const [value, setValue] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem('feedback'));
    return savedValue || {
      good: 0,
      neutral: 0,
      bad: 0
    };
  });

useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(value));
  }, [value]);

  // const handleValue = (key) => {
  //    setValue({
  //     ...value,
  //     [key]: value[key] + 1,
  //   })
  // }

  // const handlePrev = () => {
  //   setValue({
  //     ...value,
  //     good: value.good + 1,
  //   })
  // }
  
//     const handlePrev1 = () => {
//   // setValue(value + 1)
//     }
  
//     const handlePrev2 = () => {
//   // setValue(value + 1)
// }

//   const handleClick = (key) => {
//     setClicks({
//       ...clicks, 
//     [key]: clicks[key] +1,
//     })
//   }

  const updateFeedback = (feedbackType) => {
setValue({
      ...value,
      [feedbackType]: value[feedbackType] + 1,
    })
  }

   const resetFeedback = () => {
    setValue({
      good: 0,
      neutral: 0,
      bad: 0
    });
  }

  const totalFeedback = value.good + value.neutral + value.bad;

  const totalPositivePercentage = Math.round(((value.good + value.neutral) / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options 
        onUpdateFeedback={updateFeedback} 
        onResetFeedback={resetFeedback} 
        totalFeedback={totalFeedback} 
      />
      {totalFeedback > 0 && <Feedback value={value} total={totalFeedback} totalPositivePercentage={totalPositivePercentage}/>}
      {totalFeedback === 0 && <Notification message="No feedback yet." />}
    </>
  )
}
