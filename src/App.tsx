import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null)
  const handleDropDownFocus = (state: boolean) => {
    setOpen(!state);
  };
  const handleClickOutsideDropdown =(e:any)=>{
    if(open && !dropdownRef.current?.contains(e.target as Node)){
      setOpen(false)
      
    }
  }
  window.addEventListener("click",handleClickOutsideDropdown)
  
  console.log(open);

  return (
    <div className="App">
      <div className="app-drop-down-container" ref={dropdownRef}>
        <button onClick={(e) => handleDropDownFocus(open)}>Drop down</button>
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
