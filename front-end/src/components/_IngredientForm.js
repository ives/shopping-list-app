import React from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "45%",
  },
}));

function IngredientForm({ history, setAlertType, fetchIngredients, id }) {

  const [addedName, setAddedName] = React.useState("");
  const [addedSupermarket, setAddedSupermarket] = React.useState("");
  const [invalidAddInput, setInvalidAddInput] = React.useState(false);

  const classes = useStyles();

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
              value={addedName}
              onChange={(event) => {
                setAddedName(event.target.value);
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
              value={addedSupermarket}
              onChange={(event) => setAddedSupermarket(event.target.value)}
              labelId="add-spm"
            >
              <MenuItem value="">ANY (default)</MenuItem>
              <MenuItem value="M&S">M&S</MenuItem>
              <MenuItem value="WAITROSE">WAITROSE</MenuItem>
              <MenuItem value="SAINSBURYS">SAINSBURYS</MenuItem>
            </Select>
            <FormHelperText>Defaults to ANY</FormHelperText>
          </FormControl>
        </Box>
        <Button
          onClick={changeItem}
          variant="contained"
          size="small"
          color="primary"
        >
          {id ? 'UPDATE' : 'ADD'}
        </Button>
      </form>

  );
}

export default withRouter(IngredientForm);
