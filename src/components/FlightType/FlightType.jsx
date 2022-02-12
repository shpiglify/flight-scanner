import React, { useContext } from "react";
import { AppContext } from "../ProviderWrapper/ProviderWrapper";
import styles from "./FlightType.module.css";

function FlightType() {
  const { setRadio, radio } = useContext(AppContext);
  return (
    <div>
      <div className={styles.flightType}>
        <input
          value="roundTrip"
          type="radio"
          checked={radio == "roundTrip"}
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
        Round Trip
        <input
          value="oneWay"
          type="radio"
          checked={radio == "oneWay"}
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
        One Way
      </div>
    </div>
  );
}

export default FlightType;
