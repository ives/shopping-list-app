import React from "react";
import { useParams } from "react-router-dom";

function EditRecipe() {
  const { id } = useParams();
  return (
    <div>
      <p>EditRecipe</p>
      <p>ID: {id}</p>
    </div>
  );
}

export default EditRecipe;
