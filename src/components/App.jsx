import { useState } from 'react';
import Statistics from './Startistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export function App() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  //роблю масив для того щоб пребирати його і витягувати в кнопки
  //обов'язково в кавичках, бо інакше не працює
  const names = ['good', 'neutral', 'bad']

  // якщо натискати на якусь кнопку, то в залежності від кнопки буде мінятися стейт
  // кейс теж в кавичках обов'язково
  const handleClick = (name) => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
    
      default:
        break;
    }
  }

  const countTotalFeedback = () => {
    // сумарна кількість відгуків
    const total = (good + neutral + bad);
    return total;
  }

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();

    // шукаю кількість позитивних у відсотках
    const positiveFeedback = Math.round((good / totalFeedback) * 100)
    return (positiveFeedback ? positiveFeedback : 0)
  }

  return (
    <div>
      <Section title='Please leave feedback'>
        <FeedbackOptions
          names={names}
          onLeaveFeedback={handleClick }
        />
      </Section>
      <Section title='Statistics'>
        {countTotalFeedback() > 0
          ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
          :
          <Notification
            message='There is no feedback'/>
        
        }
      </Section>
    </div>
  );
};
