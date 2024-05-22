import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from './redux/operations';
import { getContacts } from './redux/selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const [contactName, setContactName] = useState('');
  const [number, setNumber] = useState('');
  let contacts = useSelector(getContacts);

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setContactName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const saved = saveContact({ contactName, number });

    if (saved) {
      form.reset();
    }
  };

  const saveContact = contact => {
    console.log('contact', contact);
    const checkName = contacts

      .map(item => item.name.toLowerCase())
      .some(item => item === contactName.toLowerCase());

    if (checkName) {
      window.alert(`This contact ${contactName} already excist `);
      return false;
    } else {
      dispatch(addContact({ name:contactName, phone:number }));
      return true;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Add your name..."
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Contact
        <input
          onChange={handleChange}
          type="tel"
          name="number"
          placeholder="Add your number..."
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
};
