import React, { useState } from "react";
import "../css/AddData.scss";

function AddData({ onClose, data, setData }) {
  const [inputData, setInputData] = useState({});
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleAdd = () => {
    if (!inputData.food) {
      alert("Please add food");
      return;
    }

    if (!inputData.date) {
      alert("Please add date");
      return;
    }

    if (!inputData.calory) {
      alert("Please add Calorie");
      return;
    }
    setData((prev) => [...prev, inputData]);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Add Food</h2>
        <div className="inputcontainer">
          <div>
            <span>Food</span>
            <input
              type="text"
              name="food"
              value={inputData?.food}
              id=""
              onChange={handleChange}
            />
          </div>
          <div>
            <span>Date</span>
            <input
              type="date"
              name="date"
              value={inputData?.date}
              id="date"
              onChange={handleChange}
            />
          </div>
          <div>
            <span>Calorie</span>
            <input
              type="number"
              name="calory"
              value={inputData?.calory}
              id=""
              onChange={handleChange}
            />
          </div>

          <div className="btnContainer">
            <button className="close-popup-btn" onClick={handleAdd}>
              Add Food
            </button>

            <button className="close-popup-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddData;
