import React from "react";
import useMousePosition from "../../hooks/useMousePointer";

const Cursor = () => {
  const { x, y } = useMousePosition();
  return (
    <>
      <div className="cursor" style={{ left: `${x}px`, top: `${y}px` }}></div>
    </>
  );
};
export default Cursor;