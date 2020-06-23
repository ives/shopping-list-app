import React from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom";

function IngredientForm({ history, setAlertType, fetchIngredients, id }) {

  const [addedName, setAddedName] = React.useState("");
  const [addedSupermarket, setAddedSupermarket] = React.useState("");
  const [invalidAddInput, setInvalidAddInput] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    changeItem();
  };

  // FETCH ONE when editing

  const fetchIngredientById = async (id) => {
    console.log('Fetching BY ID', id);
    try {
      const data = await axios.get(`${process.env.REACT_APP_API_BASE_URI_DEV}/api/ingredients/${id}`);
      const {name, supermarket} = data.data;
      setAddedName(name);
      setAddedSupermarket(supermarket);
      console.log('by id', data.data)
    } catch(error) {
      console.debug("fetchIngredientById failed", error);
      setAlertType("error");
    }
  }
  

  // ADD or UPDATE

  const changeItem = async () => {

    // validate
    setInvalidAddInput(false);
    if (addedName.length < 3) {
      setInvalidAddInput(true);

    } else {
    
      try {
        // REPLACE put when ID prop is set
        // NEW post when no ID prop is present
        let url = `${process.env.REACT_APP_API_BASE_URI_DEV}/api/ingredients`;
        url = id ? `${url}/${id}` : url;
        const payload = {
          name: addedName
        };
        if (addedSupermarket) {
          payload.supermarket = addedSupermarket;
        }
        //await axios.post(url, payload);
        await axios({
          method: id ? 'put' : 'post',
          url,
          data: payload
        });
        setAlertType("success");
        setAddedName("");
        setAddedSupermarket("");

        if (id) {
          history.push(`/manage-ingredients`);
        } else {
          fetchIngredients();
        }

      } catch(error) {
        console.debug("changeItem failed", error);
        setAlertType("error");
      }
      
    }
  };  

  React.useEffect(() => {
    if(id) {
      fetchIngredientById(id);
    }
  }, [id]); // [] - only call once when MOUNTED

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        
            <label htmlFor="add-input">Ingredient Name:</label>
            <input
              id="add-input"
              required
              error={invalidAddInput}
              helperText={invalidAddInput ? "Minimum 3 characters" : ""}
              value={addedName}
              onChange={(event) => {
                setAddedName(event.target.value);
                setInvalidAddInput(false);
              }}
            />
            <label htmlFor="add-spm">Supermarket:</label>
            <select
              id="add-spm"
              name=""
              value={addedSupermarket}
              onChange={(event) => setAddedSupermarket(event.target.value)}
            >
              <option value="">ANY (default)</option>
              <option value="M&S">M&S</option>
              <option value="WAITROSE">WAITROSE</option>
              <option value="SAINSBURYS">SAINSBURYS</option>
            </select>
            <p>Defaults to ANY</p>
        <button onClick={changeItem} >
          {id ? 'UPDATE' : 'ADD'}
        </button>
      </form>

  );
}

export default withRouter(IngredientForm);
