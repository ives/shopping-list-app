import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

function ManageRecipes() {
  const myCSS = {
    liWidth: {
      width: "100%"
    },
    input: {
      paddingBottom: "20px"
    },
  };

  const removeItem = (e) => {
    console.log("Remove", e.target);
  };

  return (
    <div>
      <h4>Manage recipies</h4>

      <form noValidate autoComplete="off">
        <Button variant="contained" size="small" color="primary">
          Add New
        </Button>

        <p>Press to Modify</p>

        <List component="nav" aria-label="main mailbox folders">
          <ListItem button divider>
            <div style={myCSS.liWidth}>One</div>
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={removeItem}
            >
              X
            </Button>
          </ListItem>
          <ListItem button divider>
            <div style={myCSS.liWidth}>Two</div>
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
