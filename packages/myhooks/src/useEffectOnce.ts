import { useEffect } from 'react';

type Ifn = () => void;

const useEffectOnce = (fn: Ifn) => {
  useEffect(
    () => {
    console.log('ssssssssss');
    fn();
  }, [])
};

export default useEffectOnce;
