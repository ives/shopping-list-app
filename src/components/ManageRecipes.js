import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";

function ManageRecipes() {

  return (
    <div>
      <h4>Manage recipies</h4>

      <form noValidate autoComplete="off">
        <Box mb={5}>
          <Button
            component={ReactRouterLink}
            to="/edit-recipe/new"
            variant="contained"
            size="small"
            color="primary"
          >
            Add New
          </Button>
        </Box>

        <p>Tap to view / edit:</p>

        <List component="nav" aria-label="main mailbox folders">
          <ListItem button divider>
          <Box width="100%">One</Box>
            <Button color="primary" variant="contained" size="small">
              X
            </Button>
          </ListItem>
          <ListItem button divider>
          <Box width="100%">Two</Box>
            <Button color="primary" variant="contained" size="small">
              X
            </Button>
          </ListItem>
        </List>
      </form>
    </div>
  );
}

export default ManageRecipes;
