import React from "react";

const MenuList = ({ menu }) => {
  return (
    <div className="menu-list">
      {menu.map(({ id, title, price, img, desc }) => (
        <div key={id} className="menu-item">
          <img src={img} alt={title} />
          <div className="item-info">
            <h3>{title} <span>${price}</span></h3>
            <p>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
