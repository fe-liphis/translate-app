import { useEffect, useState } from "react";

function useNotification() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const visibleTimeoutId = setTimeout(() => setIsVisible(false), 2000);

    return () => {
      clearTimeout(visibleTimeoutId);
    };
  }, [isVisible]);

  return {
    isVisible,
    setIsVisible,
  };
}

export default useNotification;
