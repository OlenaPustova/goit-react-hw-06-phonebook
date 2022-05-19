import PropTypes from 'prop-types';

import s from './Filter.module.scss';

export default function Filter({ value, onChange }) {
  return (
    <label>
      Find contact by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
