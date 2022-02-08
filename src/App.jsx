import './App.css';
import { useState } from 'react';
import Section from './Components/Section/Section';
import FeedbackOptions from './Components/Feedback/FeedbackOptions';
import Stats from './Components/Stats/Stats';
import Notification from './Components/Notification/Notification';

function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const handleClick = evt => {
    switch (evt.target.value) {
      case 'good':
        setGoodFeedback(prevState => prevState + 1);
        break;

      case 'bad':
        setBadFeedback(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutralFeedback(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return goodFeedback + badFeedback + neutralFeedback;
  };
  const countPositiveFeedbackPercentage = () => {
    if (goodFeedback === 0) {
      return 0;
    } else return Math.round((goodFeedback / countTotalFeedback()) * 100);
  };
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleClick}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Stats
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </>
  );
}
export default App;
