import { useState } from 'react';
import s from './ContactForm.module.scss';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default function ContactForm({ addContact }) {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const [form, setForm] = useState({
    name: '',
    number: '',
  });

  const { name, number } = form;

  const handleChange = e => {
    const { name, value } = e.target;

    setForm(prevForm => {
      return {
        ...prevForm,
        [name]: value,
      };
    });

    // switch (name) {
    //   case 'name':
    //     setName(value);
    //     break;

    //   case 'number':
    //     setNumber(value);
    //     break;

    //   default:
    //     break;
    // }
  };

  const reset = () => {
    setForm({ name: '', number: '' });
    // setName('');
    // setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ ...form, id: nanoid() });
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={s.btn}>Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
