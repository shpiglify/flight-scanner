import React, { useContext } from "react";
import Context from "../../components/context";
import Flight from "../../components/Flight/Flight";

import styles from "./FlightsResult.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const FlightsResult = () => {
  const { flightResults } = useContext(Context);

  return (
    <>
      <header className={styles.FlightsResultHeader}>
        <SearchBar mainClass={styles.flightResultSearchBar} />
      </header>
      <main className={styles.FlightsResultContainer}>
        <div className={styles.container}>
          <div className={styles.resultsForOneWay}>
            {flightResults.length > 0
              ? flightResults.map((flight) => <Flight flight={flight} />)
              : null}
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
};

export default FlightsResult;
