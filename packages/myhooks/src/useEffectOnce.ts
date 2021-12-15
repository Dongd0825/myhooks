import { useEffect } from 'react';

type Ifn = () => void;

const useEffectOnce = (fn: Ifn) => {
  useEffect(
    () => {
    console.log('');
    console.log('');
    console.log('');
    fn();
  }, [])
};

export default useEffectOnce;
