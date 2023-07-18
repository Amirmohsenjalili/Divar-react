import React from 'react';
import styles from "../../../assets/styles/Asaidebar.module.scss";

//atoms
import Input from '../../atoms/Input/Input';
//molecules
import Form from '../../molecules/Form/Form';

const ButtonCondition = () => {
    return (
            <Form className={styles.switchFilter}>
                <Form className={styles.toggleSwitchFilter}>
                    <span>فقط عکس دار</span>
                    <Form>
                        <Form className={styles.switch}>
                            <Input type="checkbox" />
                            {/* <input type="checkbox" /> */}
                            <span className={`${styles.slider} ${styles.round}`}></span>
                        </Form>
                    </Form>
                </Form>
                <Form className={styles.toggleSwitchFilter}>
                    <span>فقط فوری</span>
                    <Form>
                        <Form className={styles.switch}>
                            <Input type="checkbox" />
                            {/* <input type="checkbox" /> */}
                            <span className={`${styles.slider} ${styles.round}`}></span>
                        </Form>
                    </Form>
                </Form>
            </Form>
    );
};

export default ButtonCondition;