import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';

export default function App() {
  const [contacts, setContacts] = useLocalStorage({
    key: 'contacts',
    defaultlValue: [],
  });
  const [filtered, setFiltered] = useState('');

  const addContact = contact => {
    if (
      contacts.some(item =>
        item.name.toLowerCase().includes(contact.name.toLowerCase())
      )
    ) {
      return alert(`${contact.name} is already in contacts`);
    }
    setContacts(prevState => [...prevState, contact]);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const findContact = e => {
    setFiltered(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const filterToLowerCase = filtered.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={filtered} onChange={findContact} />
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </>
  );
}
