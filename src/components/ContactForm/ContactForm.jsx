import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from '../../redux/contactsApi';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase(),
      )
    ) {
      toast.info(`'${name}' is already in use!`, {
        autoClose: 2500,
      });
      e.currentTarget.reset();
      return;
    }

    createContact(newContact);
    e.currentTarget.reset();
  };

  return (
    <>
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
      <ToastContainer transition={Zoom} autoClose={3000} />
    </>
  );
}

export default ContactForm;
