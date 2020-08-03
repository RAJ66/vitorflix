import React from "react";
import { Link, useHistory } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm'
import Button from "../../../components/Button"
import createVideo from "../../../repositories/video"

function RegistrationVideo() {
  const history = useHistory()
  const { values, handleChange, clearForm } = useForm({})

  return (
    <PageDefault >
      <h1>Registration Video</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        createVideo.create({
          titulo: values.url,
          url: values.url,
          categoriaId: 1
        }).then(() => {
          console.log('Success');
          history.push('/');
        })

      }}>
        <FormField
          label="Video Title"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />
        <FormField
          label="Category"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">Register</Button>
      </form>
      <Link to="/registration/category">Registration Category</Link>
    </PageDefault>
  );
}

export default RegistrationVideo;
