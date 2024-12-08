import { useEffect, useState } from 'react';
import { subscribeToLoading } from '../axios';

export const useGlobalLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = subscribeToLoading(setIsLoading);
    return () => unsubscribe();
  }, []);

  return isLoading;
};
