import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import AppMenu from "./components/AppMenu";
import ShoppingList from "./components/ShoppingList";
import BuildList from "./components/BuildList";
import ManageIngredients from "./components/ManageIngredients";
import ManageRecipes from "./components/ManageRecipes";
import EditRecipe from "./components/EditRecipe";

function App() {

  return (
    <div className="App">
      <section>
        <AppMenu />
        <Switch>
          <Route path="/shopping-list">
            <ShoppingList />
          </Route>
          <Route path="/build-list">
            <BuildList />
          </Route>
          <Route path="/manage-ingredients/:id?">
            <ManageIngredients />
          </Route>
          <Route path="/manage-recipes">
            <ManageRecipes />
          </Route>
          <Route path="/edit-recipe/:id?">
            <EditRecipe />
          </Route>
          <Route path="/">
            <Redirect to="/shopping-list" />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
