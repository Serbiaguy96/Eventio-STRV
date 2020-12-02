import { useEffect, useState } from "react";

const useViewPortDimensions = () => {
  const [x, setX] = useState(window.innerWidth);
  const [y, setY] = useState(window.innerHeight);

  const setDimensions = () => {
    setX(window.innerWidth);
    setY(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", setDimensions);
    return () => {
      window.removeEventListener("resize", setDimensions);
    };
  }, []);

  return { x, y };
};

export default useViewPortDimensions;
