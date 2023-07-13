import React,{useState} from "react";
import Child from "./Child";
import "./../styles/App.css";

const App = () => {
  const [modal, showModal] = useState(false);
  const updateParent = () => {
    showModal(true);
  };
  return (
    <div className="parent" style={{ backgroundColor: "#7C28DE" }}>
      {/* Do not remove the main div */}
      <h1>Parent Componenet</h1>
      <Child updateParent={updateParent} />
      {modal == true ? (
        <div>
          <h2>Modal Content</h2>
          <p>This is modal content</p>
        </div>
      ) : null}
    </div>
  );
};

export default App;
