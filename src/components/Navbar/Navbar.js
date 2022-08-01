import React from 'react';
import { destination } from './Destination';
import './Navbar.css';
import MenuItems from './MenuItems';

const Navbar = () => {
  return (
    <ul className='menus'>
        {destination.map((menu,index)=>{
          console.log('juj', menu);
          const depthLevel=0;
          return(
            <>
            <MenuItems items={menu} key={index} depthLevel={depthLevel}/>
            </>
            )
        })}
    </ul>
  )
}

export default Navbar