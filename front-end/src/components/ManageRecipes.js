import React from "react";
import { Link } from "react-router-dom";

function ManageRecipes() {
  return (
    <div>
      <h4>Manage recipies</h4>

      <form noValidate autoComplete="off">
        <Link to="/edit-recipe/new">Add New</Link>

        <ul>
          <li>
            <Link to="edit-recipe/123">
              One
              <button>X</button>
            </Link>
          </li>
          <li>
            <Link to="edit-recipe/543t">
              Two
              <button>X</button>
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default ManageRecipes;
