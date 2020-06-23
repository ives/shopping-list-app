import React from "react";
import axios from 'axios';

import { useParams, Link, withRouter } from "react-router-dom";
import IngredientForm from "./_IngredientForm";

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

    event.stopPropagation();

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
        <Link to="/manage-ingredients">
          INGREDIENTS
        </Link>{" "}
        > {id ? `Editing ${id}` : "Add New"}
      </h4>

      <IngredientForm 
        setAlertType={setAlertType} 
        fetchIngredients={fetchIngredients}
        id={id}
       />
      
      {!id && (
        <React.Fragment>
          <hr />

        
          <ul>
            {allItems && allItems.map(item => (
              <li button onClick={() => editItem(item.id)} key={item.id}>
                <div width="100%">
                  {item.name} &nbsp;
                  {item.supermarket && (<span className="supermarket">{item.supermarket}</span>)}
                </div>
                <button onClick={(event) => removeItem(event, item.id)} >
                  X
                </button>
            </li>
            ))}
          </ul>
        </React.Fragment>
      )}

    </div>
  );
}

export default withRouter(ManageIngredients);
