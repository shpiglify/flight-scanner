import React from "react";
import styles from "./Destanation.module.css";


const Destanation = ({ city, price, airport, image }) => {
  return (
    <div className={styles.destanation}>
      <div className={styles.imageCont}>
        <img src={image} alt={city} />
      </div>
      <div className={styles.destanationDetails}>
        <div className={styles.destanationLeft}>
          <h3>{city}</h3>
          <span>{airport}</span>
          <h4>{price}</h4>
        </div>
        <div className={styles.destanationRight}>
          <button>Book</button>
        </div>
      </div>
    </div>
  );
};

export default Destanation;
