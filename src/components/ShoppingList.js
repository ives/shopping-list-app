import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";

function ShoppingList() {
  const myCSS = {
    crossed: {
      textDecoration: "line-through",
      // color: "grey",
    },
  };

  const startNewReset = () => {
    let proceed = window.confirm("Are you sure?");
    console.log("proceed?", proceed);
  };

  // ToDo grey out and cross once ticked

  return (
    <div>
      <h4>Shopping list</h4>
      <List component="nav" aria-label="main mailbox folders" disablePadding dense>
        <Divider />
        <p>Waitrose</p>

        <ListItem button>
          <Checkbox color="default" />
          <Box width="100%">Salmon</Box>
        </ListItem>
        <ListItem button>
          <Checkbox checked color="default" />
          <Box style={myCSS.crossed} width="100%">
            Bread
          </Box>
        </ListItem>

        <Divider />
        <p>Any</p>

        <ListItem button>
          <Checkbox checked color="default" />
          <Box style={myCSS.crossed} width="100%">
            Bread
          </Box>
        </ListItem>
        <ListItem button>
          <Checkbox color="default" />
          <Box width="100%">Rice</Box>
        </ListItem>
      </List>

      <Box my={2}>
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={startNewReset}
        >
          All Done - Reset List
        </Button>
      </Box>
    </div>
  );
}

export default ShoppingList;
