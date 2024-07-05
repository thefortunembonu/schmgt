import React from "react";

interface ChildrenType {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Dropdownbtns({ children, onClick }: ChildrenType) {
  return (
    <button className="dropdownbtn" onClick={onClick}>
      {children}
    </button>
  );
}

export default Dropdownbtns;
