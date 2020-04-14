import React from "react";
import Container from "@material-ui/core/Container";

import "./App.css";
import AppMenu from "./AppMenu";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm" style={{ border: "1px solid pink" }}>
        <AppMenu />
        <div>MAIN</div>
      </Container>
    </div>
  );
}

export default App;
