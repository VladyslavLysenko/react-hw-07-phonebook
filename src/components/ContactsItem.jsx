import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from './redux/contactSlice';

export const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <span>
        {contact.name} : {contact.number}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

ContactsItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};