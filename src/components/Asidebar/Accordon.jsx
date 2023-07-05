import React from 'react';
import img from '../../images/ChevronDown.svg';
import styles from "../styles/Asaidebar.module.scss";


const Accordon = ({title,show}) => {
      
      return (
          <div className={styles.asaideButton}>
            <button className={styles.asaideButtonItem} onClick={show}>
                <img src={img}/> 
                <span>{title}</span>
            </button>
        </div>
    );
};

export default Accordon;
