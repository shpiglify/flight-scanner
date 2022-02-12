import React, { useContext } from "react";
import { AppContext } from "../../components/ProviderWrapper/ProviderWrapper";
import FlightDetails from "../../components/FlightDetails/FlightDetails";
import OneWayTickets from "../../components/OneWayTickets/OneWayTickets";
import RoundTripTickets from "../../components/RoundTripTickets/RoundTripTickets";

import styles from "./FlightsResult.module.css";

const FlightsResult = ({
  // radio,
  setUserSelectionForRoundTrip,
  setUserSelectionForOneWay,
}) => {
  const { radio } = useContext(AppContext);

  return (
    <>
      <header className={styles.FlightsResultHeader}>
        <FlightDetails
        // radio={radio}
        // setUserSelectionForRoundTrip={setUserSelectionForRoundTrip}
        />
      </header>
      <main className={styles.FlightsResultContainer}>
        {radio == "roundTrip" ? (
          <div className={styles.resultsForRoudTrip}>
            <RoundTripTickets
              setUserSelectionForRoundTrip={setUserSelectionForRoundTrip}
            />
          </div>
        ) : (
          <div className={styles.resultsForOneWay}>
            <OneWayTickets
              setUserSelectionForOneWay={setUserSelectionForOneWay}
            />
          </div>
        )}
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
};

export default FlightsResult;
