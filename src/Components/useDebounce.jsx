import React, { useEffect, useState } from "react";

const useDebounce = (text, delay) => {
  const [debounce, setDebounce] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(text);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [text]);
  return debounce;
};

export default useDebounce;
