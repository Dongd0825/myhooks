import { useEffect } from 'react';

const useEffectOnce = (fn) => {
  useEffect(() => {


    
    fn()
  }, [])
}

export default useEffectOnce;