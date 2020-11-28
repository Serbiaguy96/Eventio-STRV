import { useEffect, useState } from "react";

export default () => {
  const [x, setX] = useState(window.innerWidth);
  const [y, setY] = useState(window.innerHeight);

  const setDimensions = () => {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
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
