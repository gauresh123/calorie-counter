import React from "react";
import "../css/Home.scss";
import { format } from "date-fns";
function Home({ data, setData }) {
  const handleDelete = (i) => {
    setData((prev) => prev.filter((val, index) => index !== i));
  };
  return (
    <table className="tablecontainer">
      <thead>
        <tr>
          <th className="food">Food</th>
          <th>Date</th>
          <th>Day</th>
          <th>Calories</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((val, i) => {
          return (
            <tr key={i}>
              <td>{val.food}</td>
              <td>{val?.date}</td>
              <td>{format(new Date(val?.date), "EEEE")}</td>
              <td>{val.calory}</td>
              <td>
                <button className="deletebtn" onClick={() => handleDelete(i)}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
        {data.length == 0 && (
          <tr>
            <td>Enter Food..</td>
            <td>Enter Date..</td>
            <td>Day..</td>
            <td>Enter Calolry..</td>
            <td>Delete the food..</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default Home;
