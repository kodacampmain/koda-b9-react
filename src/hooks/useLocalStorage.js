import { useState, useEffect } from "react";

/**
 * @template S
 * @param {string} key
 * @param {S|null} initialValue
 * @returns {[S, import("react").Dispatch<import("react").SetStateAction<S>>]}
 */
function useLocalStorage(key, initialValue = null) {
  // state ? yes
  const [value, setValue] = useState(() => {
    // cek localstorage
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }

    // if not persisted yet, use initial value
    if (typeof initialValue === "function") {
      return initialValue();
    }
    return initialValue;
  });
  // what happened if there is an update?
  // apabila nilai berubah, update juga localstorage nya
  useEffect(() => {
    let data = value;
    if (typeof data !== "string") {
      data = JSON.stringify(value);
    }
    localStorage.setItem(key, data);
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;
