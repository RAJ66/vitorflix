import React from 'react';
import './styles.css';
import { Link } from "react-router-dom"

function Page404() {
  return <div className="page-container">
    <div className="numbers">
      <strong>404</strong>
    </div>
    <div className="text">
      <h2>We can't find the page you are looking for</h2>
    </div>
    <div className="sad-smile">
      <h1>:(</h1>
    </div>
  </div>;
}

export default Page404;