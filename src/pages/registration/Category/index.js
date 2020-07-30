import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from "../../../components/Button"

function RegistrationCategory() {
  const startValues = {
    name: '',
    description: '',
    color: '',
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
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  useEffect(() => {
    setTimeout(() => {
      setCategories([...categories, {
        "id": 1,
        "name": "Front End",
        "description": "Description",
        "cor": "#6BD1FF"
      },
      {
        "id": 2,
        "name": "Back End",
        "description": "Description",
        "cor": "#6BD1FF"
      }]);
    }, 4 * 1000)
  }, [])

  return (
    <PageDefault>
      <h1>
        Registration Category:
        {' '}
        {values.name}
      </h1>

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
          type="textarea"
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
        <Button>Register</Button>
      </form>

      {categories.length === 0 &&
        <div>Loading...</div>
      }
      <ul>
        {categories.map((category, index) => <li key={`${category.name}${index}`}>{category.name}</li>)}
      </ul>

      <Link to="/">Go to home</Link>
    </PageDefault>
  );
}

export default RegistrationCategory;
