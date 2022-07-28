import React from "react";
import MenuItems from "./MenuItems";

const ListDown = ({ submenus,listdown,depthLevel }) => {
    depthLevel = depthLevel + 1;
 const listdownClass = depthLevel > 1 ? "listdown-submenu" : "";
  return (
    <ul className={`listdown ${listdownClass} ${listdown ? "show" : ""}`}>
      <div className='listdown-menu'>
    {submenus.map((submenu, index) => (
     <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
    ))}
    </div>
   </ul>
  );
};

export default ListDown;
