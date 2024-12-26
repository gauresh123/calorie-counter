import React, { useEffect, useState } from "react";
import "./App.scss";
import Home from "./components/Home";
import AddData from "./components/AddData";
import { dummyData } from "./constants/dummyData";

function App() {
  const [data, setData] = useState(dummyData);
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <div className="container">
      <h2>My Calories</h2>
      <div className="caloryContainer">
        <h3>
          Total Calories:
          {data.reduce((acc, curr) => (acc += Number(curr.calory)), 0)}
        </h3>
        <button className="btn" onClick={() => setIsAddOpen(true)}>
          Add Food
        </button>
      </div>

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
