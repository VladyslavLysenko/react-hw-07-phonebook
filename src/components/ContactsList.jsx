import { ContactsItem } from './ContactsItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from './redux/selectors';

export const ContactsList = () => {
  let contacts = useSelector(getContacts);
  let filterValue = useSelector(getFilter);

  if (filterValue) {
    contacts = contacts.filter(item =>
      item.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  }

  return (
    <section title="Contacts">
      <h2>Contacts</h2>
      <ul className="contacts__list">
        {contacts.map(contact => (
          <li key={contact.id}>
            <ContactsItem contact={contact} />
          </li>
        ))}
      </ul>
    </section>
  );
};
