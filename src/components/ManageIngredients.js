import React from "react";
import axios from 'axios';

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import FormMessage from "./FormMessage";
import Box from "@material-ui/core/Box";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "45%",
  },
}));

function ManageIngredients() {

  const [allItems, setAllItems] = React.useState([]);
  const [addedItem, setAddedItem] = React.useState("");
  const [invalidAddInput, setInvalidAddInput] = React.useState(false);
  const [alertType, setAlertType] = React.useState("");

  const fetchIngredients = async () => {
    console.log('fetchIngredients async ::');

    try {
      // fetch data from a url endpoint
      const data = await axios.get(`${process.env.REACT_APP_API_BASE_URI_DEV}/api/ingredients`);
      setAllItems(data.data);
      console.log('data', data.data);
      console.log('allItems', allItems);
      return data;
    } catch(error) {
      console.log("fetchIngredients failed", error);
      // appropriately handle the error
    }
  }


  React.useEffect(() => {
    fetchIngredients();
  }, []); // [] - only call once when MOUNTED

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    addItem();
  };

  // ADD

  const addItem = () => {
    console.log("Adding", addedItem);

    // validate
    setInvalidAddInput(false);
    if (addedItem.length < 3) {
      setInvalidAddInput(true);
    } else {
      // ToDo add AXIOS call
      setAlertType("success");

      // on success only: reset input
      setAddedItem("");

      // handle error
    }
  };

  // EDIT
  const editItem = (id) => {
    // ToDo add AXIOS call
    console.log("Edit", id);
  };

  // REMOVE
  const removeItem = (event, id) => {
    // ToDo confirm first
    // ToDo add AXIOS call
    event.stopPropagation();
    setAlertType("error");
    console.log("Remove", id);
  };

  return (
    <div>
      <h4>Manage ingredients for recipies</h4>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box mb={3}>
          <FormControl className={classes.formControl}>
            <TextField
              id="add-input"
              required
              label="Ingredient Name:"
              error={invalidAddInput}
              helperText={invalidAddInput ? "Minimum 3 characters" : ""}
              size="small"
              fullWidth
              value={addedItem}
              onChange={(event) => {
                setAddedItem(event.target.value);
                setInvalidAddInput(false);
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="add-spm">Supermarket:</InputLabel>
            <Select
              size="small"
              fullWidth
              id=""
              name=""
              value="M&S"
              onChange={null}
              labelId="add-spm"
            >
              <MenuItem value="">ANY (default)</MenuItem>
              <MenuItem value="M&S">M&S</MenuItem>
              <MenuItem value="WAITROSE" selected>
                WAITROSE
              </MenuItem>
              <MenuItem value="SAINSBURYS">SAINSBURYS</MenuItem>
            </Select>
            <FormHelperText>Defaults to ANY</FormHelperText>
          </FormControl>
        </Box>
        <Button
          onClick={addItem}
          variant="contained"
          size="small"
          color="primary"
        >
          ADD
        </Button>

        <Divider />

        <List component="nav" aria-label="main mailbox folders">
          {allItems && allItems.map(item => (
            <ListItem button onClick={() => editItem(item._id)}>
              <Box width="100%">
              {item.name} <span className="supermarket">{item.supermarket}</span>
              </Box>
              <Button
                color="primary"
                variant="contained"
                size="small"
                onClick={(event) => removeItem(event, item._id)}
              >
                X
              </Button>
          </ListItem>
          ))}
        </List>
      </form>

      <FormMessage alertType={alertType} callbackParent={setAlertType} />
    </div>
  );
}

export default ManageIngredients;
