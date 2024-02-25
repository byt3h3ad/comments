import { useState, useEffect } from "react";

export const useLocalStorage = (val, key) => {
  const [value, setValue] = useState(() => {
    const pValue = window.localStorage.getItem(key);
    return pValue != null ? JSON.parse(pValue) : val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};
