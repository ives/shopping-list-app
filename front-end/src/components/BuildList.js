import React from "react";

function BuildList() {
  // ToDo Grey bg for checked lines

  const startNewReset = () => {
    let proceed = window.confirm("Are you sure?");
    console.log("proceed?", proceed);
  };

  return (
    <div>
      <h4>Add to Shoping List</h4>

      <button onClick={startNewReset}>Start New List</button>

      <ul>
        <hr />
        <p>Breakfast</p>

        <li>
          <input type="checkbox" checked />
          Mediterranean Breakfast
        </li>
        <li>
          <input type="checkbox" />
          Overnight Oats
        </li>
      </ul>
      <hr />
      <p>Mains</p>

      <ul>
        <li>
          <input type="checkbox" checked />
          Spaghetti Bolognese
        </li>
        <li>
          <input type="checkbox" />
          Prawn Salad
        </li>
      </ul>

      <hr />
      <p>Snacks</p>

      <ul>
        <li>
          <input type="checkbox" checked />
          Walnuts
        </li>
        <li>
          <input type="checkbox" />
          Brie Cheese
        </li>
      </ul>

      <hr />
      <p>Basics / Sides / Ingredients</p>

      <select id="" name="" value="" onChange={null}>
        <option value={""}>Carrots</option>
        <option value={""}>Chorizo</option>
        <option value={""}>Rice</option>
        <option value={""}>Carrots</option>
        <option value={""}>Chorizo</option>
      </select>

      <select id="" name="" value="" onChange={null}>
        <option value={""}>Carrots</option>
        <option value={""}>Chorizo</option>
        <option value={""}>Rice</option>
        <option value={""}>Carrots</option>
        <option value={""}>Chorizo</option>
      </select>

      <p>Add More Basics LINK</p>
      <button onClick={startNewReset}>Start New List</button>
    </div>
  );
}

export default BuildList;
