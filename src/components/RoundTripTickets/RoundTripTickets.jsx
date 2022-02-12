import React, { useContext } from "react";
import Context from "../context";
import RoundTripFlight from "../RoundTripFlight/RoundTripFlight";

import styles from "./RoundTripTickets.module.css";
const RoundTripTickets = () => {
  // const { flightResults: [originFlight, returnFlight] } = useContext(Context);
    const { flightResults } = useContext(Context);

  console.log(flightResults);

  return (
    <div className={styles.resultsForRoudTrip}>
      <div className={styles.destination}>
        <h1>your trip to {flightResults[0][0].destination}</h1>
      </div>
      <div className={styles.results}>

      {flightResults.length && flightResults.map(flight => <RoundTripFlight flight={flight}/>)}
      </div>
    </div>
  );
};

export default RoundTripTickets;
