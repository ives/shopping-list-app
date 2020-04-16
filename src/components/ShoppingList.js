import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";

function ShoppingList() {
  const myCSS = {
    crossed: {
      textDecoration: "line-through",
      color: "grey",
    },
  };

  // ToDo grey out and cross once ticked

  return (
    <div>
      <h4>Shopping list</h4>
      <p>Tap to cross out</p>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button divider>
          <Checkbox color="default" />
          <Box width="100%">One</Box>
        </ListItem>
        <ListItem button divider>
          <Checkbox checked color="default" />
          <Box style={myCSS.crossed} width="100%">
            Two
          </Box>
        </ListItem>
      </List>
      <Box mt={2}>
        <Button variant="contained" size="small" color="primary">
          Reset
        </Button>
      </Box>
    </div>
  );
}

export default ShoppingList;
