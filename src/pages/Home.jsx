//
import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import Slider from "../components/Slider";

export const Home = () => {
  return (
    <div>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
