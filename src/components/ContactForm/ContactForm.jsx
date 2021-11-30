import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from '../../redux/contactsApi';
import { toast } from 'react-toastify';
import './ContactForm.scss';

function ContactForm() {
  const { data: contacts } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const phone = e.currentTarget.phone.value;
    const newContact = {
      name,
      phone,
    };
    const checkRepeatName = name => {
      return contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      );
    };
    const checkRepeatPhone = phone => {
      return contacts.find(contact => contact.phone === phone);
    };
    if (checkRepeatName(name)) {
      toast.info(`'${name}' is already in use!`, {
        autoClose: 2500,
      });
    } else if (checkRepeatPhone(phone)) {
      toast.info(`🤔 ${phone} is already in use`, {
        autoClose: 2500,
      });
    } else {
      e.currentTarget.reset();
    }
    createContact(newContact);
    e.currentTarget.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        <p className="title">Name:</p>
        <input
          className="input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        <p className="title">Phone:</p>
        <input
          className="input"
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className="button" type="submit">
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
