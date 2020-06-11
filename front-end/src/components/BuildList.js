import React from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function BuildList() {

  // ToDo Grey bg for checked lines

  const startNewReset = () => {
    let proceed = window.confirm("Are you sure?");
    console.log("proceed?", proceed);
  };

  return (
    <div>
      <h4>Add to Shoping List</h4>

      <Box my={2}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={startNewReset}
        >
          Start New List
        </Button>
      </Box>

      <List component="nav" disablePadding dense>
        <Divider />
        <p>Breakfast</p>

        <ListItem button style={{background:'lightgrey'}}>
          <Checkbox checked color="primary" />
          <Box width="100%">Mediterranean Breakfast</Box>
        </ListItem>
        <ListItem button>
          <Checkbox color="primary" />
          <Box width="100%">Overnight Oats</Box>
        </ListItem>

        <Divider />
        <p>Mains</p>

        <ListItem button>
          <Checkbox checked color="primary" />
          <Box width="100%">Spaghetti Bolognese</Box>
        </ListItem>
        <ListItem button>
          <Checkbox color="primary" />
          <Box width="100%">Prawn Salad</Box>
        </ListItem>

        <Divider />
        <p>Snacks</p>

        <ListItem button>
          <Checkbox checked color="primary" />
          <Box width="100%">Walnuts</Box>
        </ListItem>
        <ListItem button>
          <Checkbox color="primary" />
          <Box width="100%">Brie Cheese</Box>
        </ListItem>

        <Divider />
        <p>Basics / Sides / Ingredients</p>

        <Select size="small" fullWidth id="" name="" value="" onChange={null}>
          <MenuItem value={""}>Carrots</MenuItem>
          <MenuItem value={""}>Chorizo</MenuItem>
          <MenuItem value={""}>Rice</MenuItem>
          <MenuItem value={""}>Carrots</MenuItem>
          <MenuItem value={""}>Chorizo</MenuItem>
        </Select>

        <Select size="small" fullWidth id="" name="" value="" onChange={null}>
          <MenuItem value={""}>Carrots</MenuItem>
          <MenuItem value={""}>Chorizo</MenuItem>
          <MenuItem value={""}>Rice</MenuItem>
          <MenuItem value={""}>Carrots</MenuItem>
          <MenuItem value={""}>Chorizo</MenuItem>
        </Select>

        <p>
          Add More Basics LINK
        </p>
      </List>
      <Box my={2}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          onClick={startNewReset}
        >
          Start New List
        </Button>
      </Box>
    </div>
  );
}

export default BuildList;
