import { useEffect, useState } from 'react';

export const useLocalStorage = ({ key, defaultlValue }) => {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? defaultlValue
  );

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
