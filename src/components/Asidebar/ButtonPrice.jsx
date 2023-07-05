import React from 'react';
import styles from "../styles/Asaidebar.module.scss";

const ButtonPrice = () => {
    return (
        <div>
            <div className={styles.filterPrice}>
                <div>
                    <div>حداقل</div>
                    <div className={styles.point}>:</div>
                    <div>حداکثر</div>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="مثلا 7،000،000،000           تومان"
                    />
                    <input
                        type="text"
                        placeholder="مثلا 7،000،000،000           تومان"
                    />
                </div>
            </div>
        </div>
    );
};

export default ButtonPrice;