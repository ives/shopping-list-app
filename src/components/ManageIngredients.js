import React from "react";
import axios from 'axios';

import { useParams, Link as ReactRouterLink, withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import FormMessage from "./_FormMessage";
import IngredientForm from "./_IngredientForm";
import Box from "@material-ui/core/Box";
import { Divider } from "@material-ui/core";

function ManageIngredients({history}) {

  const { id } = useParams();
  const [allItems, setAllItems] = React.useState([]);
  const [alertType, setAlertType] = React.useState("");

  // FETCH ALL

  const fetchIngredients = async () => {
    console.log('Fetching ALL');
    try {
      const data = await axios.get(`${process.env.REACT_APP_API_BASE_URI_DEV}/api/ingredients`);
      let ingredients = data.data;
      ingredients.sort(function(a, b) {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
      setAllItems(ingredients);
    } catch(error) {
      console.debug("fetchIngredients failed", error);
      setAlertType("error");
    }
  }

  // EDIT
  const editItem = (id) => {
    history.push(`/manage-ingredients/${id}`);
  };

  // DELETE
  const removeItem = async (event, id) => {

    const goAhead = window.confirm('Delete?');
    if (!goAhead) return false;

    event.stopPropagation();
    
    try {
      await axios.delete(`${process.env.REACT_APP_API_BASE_URI_DEV}/api/ingredients/${id}`);
      fetchIngredients();
      setAlertType("success");
    } catch(error) {
      console.debug("removeItem failed", error);
      setAlertType("error");
    }
  };

  React.useEffect(() => {
    if(!id) {
      fetchIngredients();
    }
  }, [id]); // [] - only call once when MOUNTED

  return (
    <div>
        <h4>
        <ReactRouterLink
          to="/manage-ingredients"
          color="primary"
        >
          INGREDIENTS
        </ReactRouterLink>{" "}
        > {id ? `Editing ${id}` : "Add New"}
      </h4>

      <IngredientForm 
        setAlertType={setAlertType} 
        fetchIngredients={fetchIngredients}
        id={id}
       />
      
      {!id && (
        <React.Fragment>
          <Box mt={3}>
          <Divider />

        
          <List component="nav" aria-label="main mailbox folders">
            {allItems && allItems.map(item => (
              <ListItem button onClick={() => editItem(item._id)} key={item._id}>
                <Box width="100%">
                  {item.name} &nbsp;
                  {item.supermarket && (<span className="supermarket">{item.supermarket}</span>)}
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
          </Box>
        </React.Fragment>
      )}

      <FormMessage alertType={alertType} callbackParent={setAlertType} />
    </div>
  );
}

export default withRouter(ManageIngredients);
