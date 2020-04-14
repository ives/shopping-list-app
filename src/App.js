import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import "./App.css";
import AppMenu from "./components/AppMenu";
import ShoppingList from "./components/ShoppingList";
import BuildList from "./components/BuildList";
import ManageIngredients from "./components/ManageIngredients";
import ManageRecipes from "./components/ManageRecipes";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm" style={{ border: "1px solid pink" }}>
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
          <Route path="/">
            <div>MAIN / Default </div>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
