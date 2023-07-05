import React from 'react';
import styles from "../styles/Asaidebar.module.scss";


const ButtonPlace = () => {
    return (
        <div>
            <div className={styles.filterPlace}>
                <input type="text" placeholder="تعیین محل" />
            </div>
        </div>
    );
};

export default ButtonPlace;