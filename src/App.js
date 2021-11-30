import { useState } from 'react';
import { useFetchContactsQuery } from './redux/contactsApi';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

function App() {
  const { data: contacts } = useFetchContactsQuery();

  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase()),
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      {contacts && <ContactList contacts={filteredContacts()} />}
    </Container>
  );
}

export default App;
