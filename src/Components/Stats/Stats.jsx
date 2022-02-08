import propTypes from 'prop-types';
import { StatsList, StatsItem, Text } from './Stats.styled';

const Stats = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <StatsList>
      <StatsItem>
        <Text>Good:{good}</Text>
      </StatsItem>
      <StatsItem>
        <Text>Neutral:{neutral}</Text>
      </StatsItem>
      <StatsItem>
        <Text>Bad:{bad}</Text>
      </StatsItem>
      <StatsItem>
        <Text>Total:{total}</Text>
      </StatsItem>
      <StatsItem>
        <Text>Positive Feedback:{Math.round(positiveFeedback)}%</Text>
      </StatsItem>
    </StatsList>
  );
};

export default Stats;

Stats.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positiveFeedback: propTypes.number.isRequired,
};
