import React from 'react';
import giphy from "./gif/giphy.gif"
import styles from "./ErrorMessage.module.css"


const ErrorMessage = () => {
    return (
        <div className={styles.error__content}>
            <p className={styles.error__text}>
                Maybe Thanos snapped his fingers again<br/>
                and our data is gone.<br/>
                Come back when we fix everything.<br/>
            </p>
            <img src={giphy} alt="ERROR 404" className={styles.error__gif}/>
        </div>
    );
};

export default ErrorMessage;