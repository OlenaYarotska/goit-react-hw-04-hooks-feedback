import propTypes from 'prop-types';
import { ButtonsList, ButtonWrp, Button } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map((option, index) => {
        return (
          <ButtonWrp key={index}>
            <Button type="button" value={option} onClick={onLeaveFeedback}>
              {option}
            </Button>
          </ButtonWrp>
        );
      })}
    </ButtonsList>
  );
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: propTypes.array.isRequired,
  onLeaveFeedback: propTypes.func.isRequired,
};
