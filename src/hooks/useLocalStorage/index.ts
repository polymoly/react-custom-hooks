import { useCallback, useState } from "react";

type Return<T> = [T, (arg: T) => void];

export const useLocalStorage = <T = any>(key: string): Return<T> => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  });

  const setValue = useCallback(
    (value) => {
      try {
        const storingValue =
          typeof value === "function" ? value(storedValue) : value;
        setStoredValue(storingValue);
        window.localStorage.setItem(key, JSON.stringify(storingValue));
      } catch (error) {
        console.error(error);
      }
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
};
