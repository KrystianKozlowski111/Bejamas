import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener('resize', handleResize);
      handleResize();
      setTimeout(() => {
        handleResize();
      }, 400);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return windowSize;
}

export default useWindowSize;
