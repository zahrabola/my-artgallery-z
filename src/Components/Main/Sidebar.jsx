
import { FaSearch } from "react-icons/fa";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <div>
      <div>
        <form >
          <div>
            <input
              type="text"
              className="search-bar-input"
              placeholder="Search artworks..."
              required
           
            />
          </div>
          <button className="search-bar-submit" type="submit">
            <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
