import React from "react";
import { useParams, Link as ReactRouterLink } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

import Box from "@material-ui/core/Box";

function EditRecipe() {
  const { id } = useParams();

  const [title, setTitle] = React.useState("");
  const [invalidTitleInput, setInvalidTitleInput] = React.useState(false);
  const [ingredients, setIngredient] = React.useState({});
  // {1: 20, 2: 30}
  let ingredientIndex = 0;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const saveItem = () => {
    console.log("Saving", title);
    console.log("ingredients", ingredients);

    // validate title
    setInvalidTitleInput(false);
    if (title.length < 3) {
      setInvalidTitleInput(true);
    } else {
      // ToDo add AXIOS call

      // todo alert
      // setAlertType("success");

      // on success only: reset input
      setTitle("");

      // todo handle error
    }
  };

  return (
    <div>
      <h4>
        <Link
          component={ReactRouterLink}
          to="/manage-recipes"
          color="primary"
        >
          RECIPES
        </Link>{" "}
        > {id === "new" ? "Add a New" : "Edit"} Recipe <span> :: ID: {id}</span>{" "}
      </h4>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Box mb={3}>
          <TextField
            id="title-input"
            required
            error={invalidTitleInput}
            helperText={invalidTitleInput ? "Minimum 3 characters" : ""}
            size="small"
            label="Title:"
            fullWidth
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              setInvalidTitleInput(false);
            }}
          />
        </Box>

        <FormControl>
          <InputLabel htmlFor="add-cat">Category:</InputLabel>
          <Select
            size="small"
            fullWidth
            id=""
            name=""
            value=""
            onChange={null}
            labelId="add-cat"
          >
            <MenuItem value="Breakfast">Breakfast</MenuItem>
            <MenuItem value="Main">Main</MenuItem>
            <MenuItem value="Snack" selected>
              Snack
            </MenuItem>
          </Select>
          <FormHelperText>Comment goes here</FormHelperText>
        </FormControl>

        <label>Ingredients:</label>
        <Select
          size="small"
          fullWidth
          id={`ingredient-${++ingredientIndex}`}
          name={ingredientIndex}
          value={ingredients[ingredientIndex] || ""}
          onChange={(event) => {
            setIngredient({
              ...ingredients,
              [event.target.name]: event.target.value,
            });
          }}
        >
          <MenuItem value={10}>Apples</MenuItem>
          <MenuItem value={20}>Bananas</MenuItem>
          <MenuItem value={30}>Perry</MenuItem>
        </Select>

        <Select
          size="small"
          fullWidth
          id={`ingredient-${++ingredientIndex}`}
          name={ingredientIndex}
          value={ingredients[ingredientIndex] || ""}
          onChange={(event) => {
            setIngredient({
              ...ingredients,
              [event.target.name]: event.target.value,
            });
          }}
        >
          <MenuItem value={10}>Apples</MenuItem>
          <MenuItem value={20}>Bananas</MenuItem>
          <MenuItem value={30}>Perry</MenuItem>
        </Select>

        <p>LINK add another</p>

        <Button
          onClick={saveItem}
          variant="contained"
          size="small"
          color="primary"
        >
          SAVE RECIPE
        </Button>
        <p>CANCEL & RETURN</p>
      </form>
    </div>
  );
}

export default EditRecipe;
