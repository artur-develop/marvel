import React from "react";
import PropTypes from "prop-types";
import setOffset from "../../../hooks/setOffset";
import UiButton from "../../UI/UiButton";
import styles from "./CharactersNavigation.module.css";

const CharactersNavigation = ({ offset, limit, total, handleOffset }) => {
  function onClickNext() {
    handleOffset(setOffset(offset + limit));
  }

  function onClickPrevious() {
    handleOffset(setOffset(offset - limit));
  }

  return (
    <>
      <div className={styles.buttons}>
        <UiButton
          text="Previous"
          onClick={onClickPrevious}
          disabled={offset === 0}
        />
        <UiButton
          text="Next"
          onClick={onClickNext}
          disabled={offset >= total - limit}
        />
      </div>
    </>
  );
};

CharactersNavigation.propTypes = {
  offset: PropTypes.number,
  limit: PropTypes.number,
  total: PropTypes.number,
  handleOffset: PropTypes.func,
};

export default CharactersNavigation;
