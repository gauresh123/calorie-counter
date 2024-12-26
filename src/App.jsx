import React, { useEffect, useState } from "react";
import "./App.scss";
import Home from "./components/Home";
import AddData from "./components/AddData";

function App() {
  const [data, setData] = useState([]);
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <div className="container">
      <h2>My Calories</h2>
      <button className="btn" onClick={() => setIsAddOpen(true)}>
        Add Food
      </button>
      <Home data={data} setData={(val) => setData(val)} />
      {isAddOpen && (
        <AddData
          onClose={() => setIsAddOpen(false)}
          data={data}
          setData={(val) => setData(val)}
        />
      )}
    </div>
  );
}

export default App;
