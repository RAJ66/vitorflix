import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";

function RegistrationCategory() {
  return (
    <PageDefault>
      <h1>Registration Category</h1>

      <form>
        <label>
          Category Name:
          <input type="text" />
        </label>

        <button>Registration</button>
      </form>

      <Link to="/">Go to home</Link>
    </PageDefault>
  );
}

export default RegistrationCategory;
