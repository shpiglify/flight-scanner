import React, { useContext } from "react";
import { AppContext } from "../../components/ProviderWrapper/ProviderWrapper";
import FlightDetails from "../../components/FlightDetails/FlightDetails";
import OneWayTickets from "../../components/OneWayTickets/OneWayTickets";
import RoundTripTickets from "../../components/RoundTripTickets/RoundTripTickets";

import styles from "./FlightsResult.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";

const FlightsResult = ({
  // radio,
  setUserSelectionForRoundTrip,
  setUserSelectionForOneWay,
}) => {
  const { radio } = useContext(AppContext);

  return (
    <>
      <header className={styles.FlightsResultHeader}>
        <SearchBar mainClass={styles.flightResultSearchBar} />
      </header>
      <main className={styles.FlightsResultContainer}>
        {radio == "roundTrip" ? (
          <RoundTripTickets
            setUserSelectionForRoundTrip={setUserSelectionForRoundTrip}
          />
        ) : (
          <OneWayTickets
            setUserSelectionForOneWay={setUserSelectionForOneWay}
          />
        )}
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
};

export default FlightsResult;
