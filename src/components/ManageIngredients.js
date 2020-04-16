import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import FormMessage from "./FormMessage";
import Box from "@material-ui/core/Box";

function ManageIngredients() {
  const [addedItem, setAddedItem] = React.useState("");
  const [invalidAddInput, setInvalidAddInput] = React.useState(false);
  const [alertType, setAlertType] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
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
          <InputLabel htmlFor="add-input">Add New:</InputLabel>
          <TextField
            id="add-input"
            required
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
</Box>
          <Button
            onClick={addItem}
            variant="contained"
            size="small"
            color="primary"
          >
            ADD
          </Button>
        

        <List component="nav" aria-label="main mailbox folders">
          <ListItem button onClick={() => editItem("item123")}>
            <Box width="100%">One</Box>
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={(event) => removeItem(event, "item123")}
            >
              X
            </Button>
          </ListItem>
          <ListItem button onClick={() => editItem("item234")}>
            <Box width="100%">Two</Box>
            <Button
              color="primary"
              variant="contained"
              size="small"
              onClick={(event) => removeItem(event, "item234")}
            >
              X
            </Button>
          </ListItem>
        </List>
      </form>

      <FormMessage alertType={alertType} callbackParent={setAlertType} />
    </div>
  );
}

export default ManageIngredients;
