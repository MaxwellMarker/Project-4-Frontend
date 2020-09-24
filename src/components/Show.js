import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "./Layout";

export default function Show(props) {
  const [recipe, updateRecipe] = useState({
    name: "",
    img: "",
    ingredients: "",
    description: "",
  });
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://half-baked-api.herokuapp.com/recipes/${props.match.params.id}`
        );
        const data = await response.data;
        updateRecipe({ ...data });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <Layout>
      <div className="showDiv">
        <div className='showBox showInfo'>
          <h2>{recipe.name}</h2>
          <p>{recipe.ingredients}</p>
          <p>{recipe.directions}</p>
        </div>
        <div className='showBox' style={{ backgroundImage: `url(${recipe.img})` }} />
      </div>
    </Layout>
  );
}
