import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./CharactersList.module.css";

const CharactersList = ({ charList, offset }) => {
  return (
    <ul className={styles.list__container}>
      {charList?.map(({ id, name, thumbnail }) => {
        return (
          <Link
            to={`/characters/${id}`}
            className={styles.list__item}
            key={id}
            state={{ offset: offset }}
          >
            <li>
              <img
                className={styles.character__img}
                src={thumbnail?.path + "." + thumbnail?.extension}
                alt={name}
              />
              <p>{name}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

CharactersList.propTypes = {
  charList: PropTypes.array,
};

export default CharactersList;
