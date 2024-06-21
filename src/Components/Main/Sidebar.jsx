import React, {useState} from 'react';
import { FaSearch } from "react-icons/fa";
import "./sidebar.css"
const Sidebar = () => {

  


    return (
        <div >
        <div >
            <form>
                
            </form>
          <input type="text" className="search-bar-input" placeholder="Search artworks..." />
          <button className="search-bar-submit">
          <FaSearch /> 
          </button>
        </div>
      </div>
    );
}

export default Sidebar;
