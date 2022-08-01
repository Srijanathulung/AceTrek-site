import React from 'react'
import ListDown from '../Navbar/Listdown';
import {useState,useEffect,useRef} from 'react';
import {Link}  from 'react-router-dom';

const MenuItems = ({items,depthLevel}) => {
    const [listdown,setListdown]=useState(false);
    let ref=useRef();

    useEffect(()=>{
        const handler=(event)=>{
            if(listdown && ref.current && !ref.current.contains(event.target)){
                setListdown(false);
            }
        };
        document.addEventListener("mousedown",handler);
        document.addEventListener("touchstart",handler);
        return()=>{
            // Cleanup the event listener
  document.removeEventListener("mousedown", handler);
  document.removeEventListener("touchstart", handler);
        }
    },[listdown])
    const onMouseEnter = () => {
        window.innerWidth > 960 && setListdown(true);
       };
       
       const onMouseLeave = () => {
        window.innerWidth > 960 && setListdown(false);
       };
  return (
    <li className='menu-items' ref={ref} onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
        {items.submenu?(
            <>
            {/* <button type="button"
            onClick={() => setListdown((prev) => !prev)}
            > */}
            <div className='colorssss' >
               <Link to={`/country/${items.id}`}> 
            {/* {items.title}{" "} */}
               {items.title}{" "}
               </Link> 

                {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
            {/* </button> */}
            </div>
            <ListDown submenus={items.submenu} listdown={listdown} depthLevel={depthLevel}/>
            </>
        ):(
            <a  href="#">{items.title}</a>
        )}
    </li>
  )
}

export default MenuItems