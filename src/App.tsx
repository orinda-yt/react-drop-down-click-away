import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const handleClickOutsideDropDown = (e: any) => {
    if (open && !dropDownRef.current?.contains(e.target as Node)) {
      setOpen(false);
    }
  };
  window.addEventListener("click", handleClickOutsideDropDown);
  const handleFocus = () => {
    setOpen(!open);
  };
  console.log(open);

  return (
    <div className="App">
      <div className="app-drop-down-container" ref={dropDownRef}>
        <button onClick={handleFocus}>Drop down</button>
        {open && (
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
