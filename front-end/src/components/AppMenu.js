import React from "react";
import { Link } from "react-router-dom";

function AppMenu() {
  return (
    <div position="static">
      <ul>
        <li>
          <Link to="/shopping-list">Shopping List</Link>
        </li>
        <li>
          <Link to="/build-list">Build List</Link>
        </li>
        <li>
          <Link to="/manage-ingredients">Manage Ingredients</Link>
        </li>
        <li>
          <Link to="/manage-recipes">Manage Recipes</Link>
        </li>
      </ul>

      <h6>Shopping List Generator</h6>
    </div>
  );
}

export default AppMenu;
