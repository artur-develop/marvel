import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  setPersonToFavorite,
  removePersonFromFavorite,
} from "../../../store/actions";
import iconFav from "./img/icons8-captain-america_color.svg";
import iconNotFav from "./img/icons8-captain-america_black.svg";
import styles from "./PersonImage.module.css";

const PersonImage = ({
  personId,
  personImage,
  personName,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePerson = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personImage,
          },
        })
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img src={personImage} alt={personName} className={styles.image} />
        <img
          src={personFavorite ? iconFav : iconNotFav}
          onClick={dispatchFavoritePerson}
          className={styles.favorite}
          alt="Add to favorite"
        />
      </div>
    </>
  );
};

PersonImage.propTypes = {
  personId: PropTypes.number,
  personImage: PropTypes.string,
  personName: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonImage;
