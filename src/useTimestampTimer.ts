import { useState, useEffect } from "react";

// Custom hook to manage a timer
function useTimestampTimer(initialTimestamp: number): number {
  const [elapsedTime, setElapsedTime] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsed = currentTime - initialTimestamp;
      setElapsedTime(elapsed);
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, [initialTimestamp]);

  return elapsedTime;
}

export default useTimestampTimer;
