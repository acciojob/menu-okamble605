import React, { useState } from 'react';
import './../styles/App.css';
import MenuList from './MenuList';
import Categories from './Categories';
import menu from './../data/data';

const allCategories = ['all', ...new Set(menu.map(item => item.category))];

const App = () => {
  const [items, setItems] = useState(menu);
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(menu);
    } else {
      const newItems = menu.filter(item => item.category === category);
      setItems(newItems);
    }
  };

  return (
    <div className="app">
      <h1>Our Menu</h1>
      <Categories categories={categories} filterItems={filterItems} />
      <MenuList items={items} />
    </div>
  );
};

export default App;
