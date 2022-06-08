import React from "react";
import PropTypes from "prop-types";
import styles from "./PersonActivity.module.css";

const PersonActivity = ({ personActivity }) => {
  const isMore = personActivity.length > 19;

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        <span className={styles.list__header}>Mention in:</span>
        {personActivity.map(({ name, resourceURI }) => (
          <li className={styles.list__item} key={resourceURI}>
            {name}
          </li>
        ))}
        {isMore && <div className={styles.more}>and more...</div>}
      </ul>
    </div>
  );
};

PersonActivity.propTypes = {
  personActivity: PropTypes.array,
  typeActivity: PropTypes.string,
};

export default PersonActivity;
