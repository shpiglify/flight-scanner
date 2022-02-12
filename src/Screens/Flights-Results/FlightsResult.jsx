import React, { useContext } from "react";
import Context from "../../components/context";
import Flight from "../../components/Flight/Flight";

import styles from "./FlightsResult.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import RoundTripTickets from '../../components/RoundTripTickets/RoundTripTickets'

const FlightsResult = ({
  setUserSelectionForRoundTrip
}) => {
  const { flightResults } = useContext(Context);

  const isRoundTrip = Array.isArray(flightResults[0])


  return (
    <>
      <header className={styles.FlightsResultHeader}>
        <SearchBar mainClass={styles.flightResultSearchBar} />
      </header>
      <main className={styles.FlightsResultContainer}>

      

        {isRoundTrip ? (
          <RoundTripTickets
            setUserSelectionForRoundTrip={setUserSelectionForRoundTrip}
          />
        ) : (
          <div className={styles.container}>
          <div className={styles.resultsForOneWay}>
            {flightResults.length > 0
              ? flightResults.map((flight) => <Flight flight={flight} />)
              : null}
          </div>
        </div>
        )}

      </main>
      <footer className={styles.footer}></footer>
    </>
  );
};

export default FlightsResult;
