import React from "react";
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
        <div>MAIN</div>
        <ShoppingList />
        <BuildList />
        <ManageIngredients />
        <ManageRecipes />
      </Container>
    </div>
  );
}

export default App;
