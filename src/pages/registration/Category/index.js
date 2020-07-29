import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

function RegistrationCategory() {
  const startValues = {
    name: "",
    description: "",
    color: "",
  };

  const [values, setValues] = useState(startValues);

  const [categories, setCategories] = useState([]);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(event.target.getAttribute("name"), event.target.value);
  }

  return (
    <PageDefault>
      <h1>Registration Category: {values.name}</h1>

      <form
        onSubmit={function HandleSubmit(event) {
          event.preventDefault();
          setCategories([...categories, values]);
          setValues(startValues);
        }}
      >
        <FormField
          label="Category Name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Description"
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Color"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />
        <button>Register</button>
      </form>
      <ul>
        {categories.map((category, index) => {
          return <li key={`${category}${index}`}>{category.name}</li>;
        })}
      </ul>

      <Link to="/">Go to home</Link>
    </PageDefault>
  );
}

export default RegistrationCategory;
