import { useCallback, useState } from 'react';

const useToggle = (initialVal: boolean = false) => {
  const [isToggled, setIsToggled] = useState(initialVal);

  const toggle = useCallback(() => {
    setIsToggled((isToggled) => !isToggled);
  }, []);

  return [isToggled, toggle];
};

export default useToggle;
