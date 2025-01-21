import React from 'react';

const MenuList = ({ items }) => {
  return (
    <div className="menu">
      {items.map(({ id, title, category, price, img, desc }) => (
        <div key={id} className="menu-item">
          <img src={img} alt={title} />
          <div className="menu-info">
            <h3>{title} <span>${price}</span></h3>
            <p>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
