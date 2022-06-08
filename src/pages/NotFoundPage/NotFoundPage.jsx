import React from "react";
import { useLocation } from "react-router";
import styles from "./NotFoundPage.module.css";
/*import img from './img/mjolnir404.png'*/

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <>
      <div className={styles.text}>
        <h1 className={styles.error__code}>404</h1>
        <h1>You are not worthy...</h1>
        <p>
          Check that you typed the address correctly,
          <br />
          go back to your previous page
          <br />
          or try using our site search to find something specific.
          <br />
          No match for <u>{location.pathname}</u>
        </p>
        {/*<img src={img} alt="Not found page." className={styles.error__image}/>*/}
      </div>
    </>
  );
};

export default NotFoundPage;
