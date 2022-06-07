import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from './SearchPageInfo.module.css'

const SearchPageInfo = ({ people }) => (
        <>
            {people.length
                ? (
                    <ul className={styles.list__container}>
                        {people.map(({ id, name, thumbnail }) =>
                            <li className={styles.list__item} key={id}>
                                <Link to={`/characters/${id}`}
                                      key={id}
                                >
                                    <img
                                        src={thumbnail?.path+'.'+thumbnail?.extension}
                                        alt={name}
                                        className={styles.character__image}
                                    />
                                    <p className={styles.character__name}>{name}</p>
                                </Link>
                            </li>
                        )}
                    </ul>
                )
                : <h2 className={styles.character__comment}>No results</h2>
            }
        </>
);


SearchPageInfo.propTypes = {
    people: PropTypes.array
}

export default SearchPageInfo;