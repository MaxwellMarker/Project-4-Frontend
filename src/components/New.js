import React, { useState } from "react";
import axios from "axios";
import Layout from "./Layout";

export default function New(props) {
  const [formData, updateFormData] = useState({
      name: '',
      img: '',
      ingredients: '',
      directions: ''
  });
  const handleChange = (event) => {
    event.preventDefault();
    updateFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://half-baked-api.herokuapp.com/recipes', formData);
      console.log(response)
      props.history.push("/recipes")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="newForm">
        <form onSubmit={handleSubmit}>
          <h1>New Recipe</h1>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
          <input
            type="text"
            placeholder="image url"
            name="img"
            onChange={handleChange}
            value={formData.img}
          />
          <textarea
            placeholder="ingredients"
            name="ingredients"
            onChange={handleChange}
            value={formData.ingredients}
          />
          <textarea
            placeholder="directions"
            name="directions"
            onChange={handleChange}
            value={formData.directions}
          />
          <input type="submit" />
        </form>
      </div>
    </Layout>
  );
}
