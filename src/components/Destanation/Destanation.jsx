import React from "react";
import styles from "./Destanation.module.css";

const Destanation = ({ city, price, airport, image }) => {
  return (
    <div className={styles.destanation}>
      <img src={image} alt={city} />
      <div className={styles.destanationDetails}>
        <div className={styles.destanationLeft}>
          <h3>{city}</h3>
          <h4>{price}</h4>
          <h5>{airport}</h5>
        </div>
        <div className={styles.destanationRight}>
          <button>Book</button>
        </div>
      </div>
    </div>
  );
};

export default Destanation;
