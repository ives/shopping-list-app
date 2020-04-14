import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

function ManageIngredients() {
  const myCSS = {
    liWidth: {
      width: "100%",
    },
    input: {
      paddingBottom: "20px",
    },
  };

  const removeItem = (e) => {
    console.log("Remove", e.target);
  };

  return (
    <div>
      <h4>Manage ingredients for recipies</h4>

      <form noValidate autoComplete="off">
        <InputLabel htmlFor="my-input">Add New:</InputLabel>

        <TextField
          id="my-input"
          required
          size="small"
          fullWidth
          style={myCSS.input}
        />

        <Button variant="contained" size="small" color="primary">
          ADD
        </Button>

        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
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
          <ListItem button>
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

export default ManageIngredients;
