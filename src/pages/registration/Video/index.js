import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";

function RegistrationVideo() {
  return (
    <PageDefault>
      <h1>Registration Video</h1>
      <Link to="/registration/category">Registration Category</Link>
    </PageDefault>
  );
}

export default RegistrationVideo;
