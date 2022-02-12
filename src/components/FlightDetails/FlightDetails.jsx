import React, { useContext } from "react";
import { AppContext } from "../ProviderWrapper/ProviderWrapper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./FlightDetails.module.css";
import FlightType from "../FlightType/FlightType";

function FlightDetails() {
  const { searchInputs, setSearchInputs } = useContext(AppContext);

  return (
    <>
      {searchInputs && (
        <form
          className={styles.userSearch}
          key={searchInputs.origin}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <FlightType className={styles.flightResultsRadio} />
          <div className={styles.searchInputs}>
            <input
              className={styles.FromInput}
              value={searchInputs.origin}
              type="text"
              placeholder="Origin"
              onInput={(e) => {
                setSearchInputs({ origin: e.target.value });
              }}
            />
          </div>
          <div className={styles.searchInputs}>
            <input
              type="text"
              className={styles.ToInput}
              placeholder="Destination"
            />
          </div>
          <div className={styles.searchInputs}>
            <DatePicker
              className={styles.departureInput}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              placeholderText="Departure"
            ></DatePicker>
          </div>
          <div className={styles.searchInputs}>
            <DatePicker
              className={styles.returnInput}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              placeholderText="Return"
            ></DatePicker>
          </div>
          <div className={styles.searchInputs}>
            <input
              className={styles.changeFlightBtn}
              type="submit"
              value="Search Flights"
            />
          </div>
        </form>
      )}
    </>
  );
}

export default FlightDetails;
