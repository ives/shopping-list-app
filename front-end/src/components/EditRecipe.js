import React from "react";
import { useParams, Link } from "react-router-dom";

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
        <Link to="/manage-recipes" color="primary">
          RECIPES
        </Link>{" "}
        > {id === "new" ? "Add a New" : "Edit"} Recipe <span> :: ID: {id}</span>{" "}
      </h4>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="title-input">Title:</label>
        <input
          id="title-input"
          error={invalidTitleInput}
          helperText={invalidTitleInput ? "Minimum 3 characters" : ""}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            setInvalidTitleInput(false);
          }}
        />

        <label htmlFor="add-cat">Category:</label>
        <select id="add-cat" name="" value="" onChange={null}>
          <option value="Breakfast">Breakfast</option>
          <option value="Main">Main</option>
          <option value="Snack" selected>
            Snack
          </option>
        </select>
        <p>Comment goes here</p>

        <label>Ingredients:</label>
        <select
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
          <option value={10}>Apples</option>
          <option value={20}>Bananas</option>
          <option value={30}>Perry</option>
        </select>

        <select
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
          <option value={10}>Apples</option>
          <option value={20}>Bananas</option>
          <option value={30}>Perry</option>
        </select>

        <p>LINK add another</p>

        <button onClick={saveItem}>SAVE RECIPE</button>
        <p>CANCEL & RETURN</p>
      </form>
    </div>
  );
}

export default EditRecipe;
