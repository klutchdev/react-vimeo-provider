import { useEffect } from 'react';

// Usage: useTitle('🚀 Welcome!');
const useTitle = (value: string): void => {
  useEffect(() => {
    document.title = value;
  }, [value]);
};

export default useTitle;
