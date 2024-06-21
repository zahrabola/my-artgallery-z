
import { FaSearch } from "react-icons/fa";
import "./sidebar.css";
const Sidebar = ({ handleSubmit, handleChange}) => {
  return (
    <div>
      <div>
        <form  onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="search-bar-input"
              placeholder="Search artworks..."
              required
              onChange={handleChange}
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
