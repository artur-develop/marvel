import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import CharactersList from "../../components/CharactersPage/CharactersList";
import gif from './gif/EpmtyFavorite.gif'
import styles from './FavoritePage.module.css'

const FavoritePage = () => {
    const [person, setPerson] = useState([]);
    const storeData = useSelector(state => state.favoriteReducer);

    useEffect(() => {
        const arr = Object.entries(storeData)
        if (arr.length) {
            const res = arr.map(item => {
                return {
                    id: item[0],
                    name: item[1].name,
                    thumbnail: {
                        path: item[1].img.slice(0, -4),
                        extension: item[1].img.substr(-3, 3)
                    }
                }
            })
            setPerson(res)
        }
    },[])

    return (
        <>
            <h1 className="header__text">Favorites</h1>
            {person.length
                ? <CharactersList charList={person}/>
                : <>
                    <div className={styles.comment}>
                        <h2>Still no favorites???<h2>But how?...</h2></h2>
                    </div>
                    <img className={styles.comment__gif} src={gif} alt="No favorite"/>
                </>
            }
        </>
    );
};

export default FavoritePage;