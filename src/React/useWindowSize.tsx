import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth);
    });
  }, []);
  return windowSize;
};

export function UseWindowSizeExample() {
  const breakpoint = 700;

  const size = useWindowSize();
  const greaterThan = size >= breakpoint;

  return (
    <div
      style={{ backgroundColor: greaterThan ? "yellow" : "green", padding: 20 }}
    >
      <h2>{`${greaterThan ? "bigger" : "smaller"} than ${breakpoint}`}</h2>
    </div>
  );
}
