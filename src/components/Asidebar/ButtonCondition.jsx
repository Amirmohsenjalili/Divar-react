import React from 'react';
import styles from "../styles/Asaidebar.module.scss";

const ButtonCondition = () => {
    return (
        <div>
            <div className={styles.switchFilter}>
                <div className={styles.toggleSwitchFilter}>
                    <span>فقط عکس دار</span>
                    <div>
                        <label className={styles.switch}>
                            <input type="checkbox" />
                            <span className={`${styles.slider} ${styles.round}`}></span>
                        </label>
                    </div>
                </div>
                <div className={styles.toggleSwitchFilter}>
                    <span>فقط فوری</span>
                    <div>
                        <label className={styles.switch}>
                            <input type="checkbox" />
                            <span className={`${styles.slider} ${styles.round}`}></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ButtonCondition;