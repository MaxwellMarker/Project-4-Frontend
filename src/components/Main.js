import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import Layout from "./Layout";

function App() {
  const [recipes, updateRecipes] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://half-baked-api.herokuapp.com/recipes");
        const data = await response.data;
        updateRecipes([...data]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="App">
      <Layout>
        <div className="recipeContainer">
          {recipes.map((recipe) => {
            return (
              <a key={recipe.id} href={`/recipes/${recipe.id}`}>
                <div
                  
                  className="recipeDiv"
                  style={{ backgroundImage: `url(${recipe.img})` }}
                >
                  <div className="gradient" />
                  <div className="nameFlex">
                    <h2 className="recipeName">{recipe.name}</h2>
                  </div>
                </div>
              </a>
            );
          })}
          <a href='/new'>
            <div className="recipeDiv new">
              <h1 className='newLabel'>New</h1>
            </div>
          </a>
        </div>
      </Layout>
    </div>
  );
}

export default App;
