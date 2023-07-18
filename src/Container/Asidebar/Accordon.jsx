import React from 'react';
import img from '../../assets/images/ChevronDown.svg';
import styles from "../../assets/styles/Asaidebar.module.scss";

//atoms
import Buttons from '../../components/atoms/Button/Buttons';


const Accordon = ({title,show}) => {
      
      return (
          <div className={styles.asaideButton}>
            <Buttons className={styles.asaideButtonItem} onClick={show}>
                <img src={img} alt='dropdown'/> 
                <span>{title}</span>
            </Buttons>
          </div>
    );
};

export default Accordon;
