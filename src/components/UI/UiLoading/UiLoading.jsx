import React from 'react';
import infinityLoader from './img/infinityLoader.svg'
import styles from './UiLoading.module.css'

const UiLoading = () => {
    return (
        <img
            className={styles.loader}
            src={infinityLoader}
            alt="Loader"
        />
    );
};

export default UiLoading;