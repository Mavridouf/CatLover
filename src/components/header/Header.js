import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faBabyCarriage,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className={classes.header}>
      <h2>Cat-alogue</h2>
      <div className={classes["link-container"]}>
        <NavLink
          to="cats"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <FontAwesomeIcon className={classes["link-icon"]} icon={faPaw} />
          <span>Cats</span>
        </NavLink>
        <NavLink
          to="breeds"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <FontAwesomeIcon
            className={classes["link-icon"]}
            icon={faBabyCarriage}
          />
          <span>Breeds</span>
        </NavLink>
        <NavLink
          to="favourites"
          className={({ isActive }) => (isActive ? classes.active : undefined)}
        >
          <FontAwesomeIcon className={classes["link-icon"]} icon={faHeart} />
          <span>Favourites</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
