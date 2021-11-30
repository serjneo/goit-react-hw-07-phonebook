import { useDeleteContactMutation } from '../../redux/contactsApi';
import './ContactList.scss';

function ContactList({ contacts }) {
  const [deleteContact] = useDeleteContactMutation();
  return (
    <ul className="list">
      {contacts.map(contact => (
        <li key={contact.id}>
          <p className="title">Name: {contact.name}</p>
          <p className="title">Number: {contact.phone}</p>
          <button
            className="button"
            onClick={() => deleteContact(contact.id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
