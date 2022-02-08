import propTypes from 'prop-types';
import { Notif } from './Notification.styled';

const Notification = ({ message }) => {
  return <Notif>{message}</Notif>;
};

export default Notification;

Notification.propTypes = {
  message: propTypes.string.isRequired,
};
