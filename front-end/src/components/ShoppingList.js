import React from "react";

function ShoppingList() {
  const startNewReset = () => {
    let proceed = window.confirm("Are you sure?");
    console.log("proceed?", proceed);
  };

  // ToDo grey out and cross once ticked

  return (
    <div>
      <h4>Shopping list</h4>

      <ul>
        <hr />
        <p>Waitrose</p>

        <li>
          <input type="checkbox"  />
          Salmon
        </li>
        <li>
          <input type="checkbox" checked />
          Bread
        </li>
      </ul>

      <hr />
      <p>Any</p>

      <ul>
        <li>
          <input type="checkbox" checked />
          Bread
        </li>
        <li>
          <input type="checkbox" />
          Rice
        </li>
      </ul>

      <button onClick={startNewReset}>All Done - Reset List</button>
    </div>
  );
}

export default ShoppingList;
