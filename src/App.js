import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import "./App.css";
import AppMenu from "./components/AppMenu";
import ShoppingList from "./components/ShoppingList";
import BuildList from "./components/BuildList";
import ManageIngredients from "./components/ManageIngredients";
import ManageRecipes from "./components/ManageRecipes";
import EditRecipe from "./components/EditRecipe";

function App() {
  return (
    <div className="App">
      <Container align="left" maxWidth="sm">
        <AppMenu />
        <Switch>
          <Route path="/shopping-list">
            <ShoppingList />
          </Route>
          <Route path="/build-list">
            <BuildList />
          </Route>
          <Route path="/manage-ingredients">
            <ManageIngredients />
          </Route>
          <Route path="/manage-recipes">
            <ManageRecipes />
          </Route>
          <Route path="/edit-recipe/:id?">
            <EditRecipe />
          </Route>
          <Route path="/">
            <div>MAIN / Default </div>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
