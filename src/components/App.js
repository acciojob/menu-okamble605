import React, { useState } from "react";
import MenuList from "./MenuList";
import Categories from "./Categories";
import { menuData } from "./data";
import "../styles/App.css";

const allCategories = ["All", ...new Set(menuData.map((item) => item.category))];

const App = () => {
  const [menu, setMenu] = useState(menuData);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "All") {
      setMenu(menuData);
    } else {
      setMenu(menuData.filter((item) => item.category === category));
    }
  };

  return (
    <div className="main">
      <h1>Our Menu</h1>
      <Categories categories={categories} filterItems={filterItems} />
      <MenuList menu={menu} />
    </div>
  );
};

export default App;
