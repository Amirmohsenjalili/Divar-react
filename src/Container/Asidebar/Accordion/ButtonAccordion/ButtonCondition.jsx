import React from 'react';
import styles from "../../../../assets/styles/Asaidebar.module.scss";

//atoms
import Input from '../../../../components/atoms/Input/Input';

const ButtonCondition = () => {
    return (
            <div className={styles.switchFilter}>
                <div className={styles.toggleSwitchFilter}>
                    <span>فقط عکس دار</span>
                    <div>
                        <div className={styles.switch}>
                            <Input type="checkbox" />
                            <span className={`${styles.slider} ${styles.round}`}></span>
                        </div>
                    </div>
                </div>
                <div className={styles.toggleSwitchFilter}>
                    <span>فقط فوری</span>
                    <div>
                        <div className={styles.switch}>
                            <Input type="checkbox" />
                            <span className={`${styles.slider} ${styles.round}`}></span>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ButtonCondition;