import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";

function BuildList() {

  // ToDo whole like checks / unchecks

  return (
    <div>
      <h4>Build shopping list</h4>
      <p>Tap to add</p>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button divider>
          <Checkbox checked color="primary" />
          <Box width="100%">One</Box>
        </ListItem>
        <ListItem button divider>
          <Checkbox  color="primary" />
          <Box width="100%">Two</Box>
        </ListItem>
      </List>
      <Box my={2}>
        <Button variant="contained" size="small" color="primary">
          Generate Shopping List
        </Button>
      </Box>
    </div>
  );
}

export default BuildList;
