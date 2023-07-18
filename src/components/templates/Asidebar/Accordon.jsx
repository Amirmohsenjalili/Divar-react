import React from 'react';
import img from '../../../assets/images/ChevronDown.svg';
import styles from "../../../assets/styles/Asaidebar.module.scss";

//atoms
import Buttons from '../../atoms/Button/Buttons';
//molecules
import Form from '../../molecules/Form/Form';


const Accordon = ({title,show}) => {
      
      return (
        <Form className={styles.asaideButton}>
          {/* <div className={styles.asaideButton}> */}
            <Buttons className={styles.asaideButtonItem} onClick={show}>
            {/* <button className={styles.asaideButtonItem} onClick={show}> */}
                <img src={img} alt='dropdown'/> 
                <span>{title}</span>
            {/* </button> */}
            </Buttons>
        {/* </div> */}
        </Form>
    );
};

export default Accordon;
