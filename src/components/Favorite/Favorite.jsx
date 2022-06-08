import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import icon from "./img/bookmark.svg";
import styles from "./Favorite.module.css";

const Favorite = () => {
  const [count, setCount] = useState();
  const storeData = useSelector((state) => state.favoriteReducer);

  useEffect(() => {
    const count = Object.keys(storeData).length;
    count.toString().length > 2 ? setCount("...") : setCount(count);
    setCount(count);
  });

  return (
    <div className={styles.container}>
      <Link to="/favorites">
        <span className={styles.counter}>{count}</span>
        <img src={icon} alt="Favorites" className={styles.icon} />
      </Link>
    </div>
  );
};

export default Favorite;
