import React from 'react';
import styles from "../../../assets/styles/Asaidebar.module.scss";

//atoms
import Input from '../../atoms/Input/Input'
//molecules
import Form from '../../molecules/Form/Form';


const ButtonPlace = () => {
    return (
            <Form className={styles.filterPlace}>
            {/* <div className={styles.filterPlace}> */}
                <Input  type="text" placeholder="تعیین محل" />
                {/* <input type="text" placeholder="تعیین محل" /> */}
            {/* </div> */}
            </Form>
    );
};

export default ButtonPlace;