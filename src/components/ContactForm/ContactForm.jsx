import s from './ContactForm.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phonebook-actions';
import { useForm } from 'hooks/useForm';
import { memo } from 'react';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const { form, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: '',
      number: '',
    },
    cbOnSubmit: formValues => {
      if (
        contacts.some(item =>
          item.name.toLowerCase().includes(formValues.name.toLowerCase())
        )
      ) {
        return alert(
          `${formValues.name} with number ${formValues.number} is already in contacts`
        );
      }
      dispatch(addContact(formValues));
    },
  });
  const { name, number } = form;

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

export default memo(ContactForm);
