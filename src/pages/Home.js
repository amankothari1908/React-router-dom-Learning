import { Link, useNavigate } from "react-router-dom";
import React from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };
  return (
    <div>
      <h1>My homePage </h1>
      <Link to="/products">Click me </Link>
      <button onClick={navigateHandler}>Navigate</button>
    </div>
  );
};

export default HomePage;
