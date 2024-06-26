
import { FaSearch } from "react-icons/fa";
import "./sidebar.css";
const Sidebar = ({ handleSubmit, handleChange, }) => {




  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} >
          <div>
            <input
              type="text"
              className="search-bar-input"
              placeholder="Search artworks..."
              /* Search artist, keyword, genre, style */
 
              required
              onChange={handleChange}
            />
            <button className="search-bar-submit" >
               <FaSearch type="submit"/>
           </button>
           
          </div>
       
        </form>

      
        
      </div>
    </div>
  );
};

export default Sidebar;
