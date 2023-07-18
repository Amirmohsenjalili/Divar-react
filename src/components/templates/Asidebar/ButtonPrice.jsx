import React from 'react';
import styles from "../../../assets/styles/Asaidebar.module.scss";

//atoms
import Input from '../../atoms/Input/Input';
//molecules
import Form from '../../molecules/Form/Form';

const ButtonPrice = () => {
    return (
            <Form className={styles.filterPrice}>
            {/* <div className={styles.filterPrice}> */}
                <div>
                    <div>حداقل</div>
                    <div className={styles.point}>:</div>
                    <div>حداکثر</div>
                </div>
                <Form>
                    <Input type="text"
                        placeholder="مثلا 7،000،000،000           تومان"/>
                    {/* <input
                        type="text"
                        placeholder="مثلا 7،000،000،000           تومان"
                    /> */}
                    <Input type="text"
                        placeholder="مثلا 7،000،000،000           تومان"/>
                    {/* <input
                        type="text"
                        placeholder="مثلا 7،000،000،000           تومان"
                    /> */}
                </Form>
            {/* </div> */}
            </Form>
    );
};

export default ButtonPrice;