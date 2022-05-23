import { useDispatch, useSelector } from 'react-redux';
import { findContact } from 'redux/phonebook-actions';
import s from './Filter.module.scss';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleChange = e => {
    const { value } = e.currentTarget;

    dispatch(findContact(value));
  };

  return (
    <label>
      Find contact by name
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </label>
  );
}
