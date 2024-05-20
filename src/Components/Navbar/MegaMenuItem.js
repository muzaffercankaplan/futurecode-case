import Leaflet from "../../icons/Leaflet";
import "./Navbar.css";

const MegaMenuItem = ({ title, color = "#18233E", menu, width, icon }) => {
  return (
    <div>
      <p
        style={{ color: color, width: width, borderLeft: `3px solid ${color}` }}
        className="megaMenuItemHeader"
      >
        {title}
      </p>
      <ul className="megaMenuItem">
        {menu.map((item) => (
          <div
            key={item}
            className="d-flex align-items-center justify-content-center"
          >
            <li className="me-3" key={item}>
              {item}
            </li>
            {icon && <Leaflet />}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MegaMenuItem;
