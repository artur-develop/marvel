import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Favorite from "../Favorite";
import {
  useTheme,
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEUTRAL,
} from "../../context/ThemeProvider";
import styles from "./Header.module.css";

import imgAvengers from "./img/avengers.svg";
import imgDeadpool from "./img/deadpool.svg";
import imgThanos from "./img/thanos.svg";

const Header = () => {
  const [icon, setIcon] = useState(imgAvengers);
  const isTheme = useTheme();

  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(imgAvengers);
        break;
      case THEME_DARK:
        setIcon(imgThanos);
        break;
      case THEME_NEUTRAL:
        setIcon(imgDeadpool);
        break;
      default:
        setIcon(imgAvengers);
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="Logo" />
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/characters">Characters</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">Not found</NavLink>
        </li>
        <li>
          <NavLink to="/fail">Fail</NavLink>
        </li>
      </ul>
      <Favorite />
    </div>
  );
};

export default Header;
