import { useState, useEffect } from 'react';

interface Size {
  nowWidth: number | undefined;
  nowHeight: number | undefined;
}

export function useResize(): Size {
  const [windowSize, setWindowSize] = useState<Size>({
    nowWidth: undefined,
    nowHeight: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        nowWidth: window.innerWidth,
        nowHeight: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
