import React from 'react';
import styles from "../../../../assets/styles/Asaidebar.module.scss";

//atoms
import Input from '../../../../components/atoms/Input/Input';

const ButtonPrice = () => {
    return (
            <div className={styles.filterPrice}>
                <div>
                    <div>حداقل</div>
                    <div className={styles.point}>:</div>
                    <div>حداکثر</div>
                </div>
                <div>
                    <Input type="text"
                        placeholder="مثلا 7،000،000،000           تومان"/>
                    
                    <Input type="text"
                        placeholder="مثلا 7،000،000،000           تومان"/>
                    
                </div>
            </div>
    );
};

export default ButtonPrice;