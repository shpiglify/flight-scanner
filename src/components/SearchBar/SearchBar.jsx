import React, { useEffect, useState, useContext } from "react";
import moment from "moment";
import { AppContext } from "../ProviderWrapper/ProviderWrapper";
import FlightType from "../FlightType/FlightType";
import { Link } from "react-router-dom";
import { getData } from "../../Utils/clientFunctions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./SearchBar.module.css";

const airportUrl = "/data/elalRouts.json";
const flightUrl = "/data/flightsWeekOne.json";

const SearchBar = () => {
  const {
    setRadio,
    radio,
    searchInputs,
    setSearchInputs,
    setOneWayTickets,
    setRoundTripTickets,
  } = useContext(AppContext);

  const [airports, setAirports] = useState([]);
  const [flightsSchedule, setFlightSchedule] = useState([]);
  const [suggestionsOrigin, setSuggestionsOrigin] = useState([]);
  const [suggestionsDestination, setSuggestionsDestination] = useState([]);

  useEffect(() => {
    getData(airportUrl, setAirports);
  }, []);

  useEffect(() => {
    getData(flightUrl, setFlightSchedule);
  }, []);

  const handleChange = (date) => setSearchInputs({ departureDate: date });

  const setSuggestionsWrapper = (text, setSuggestions) => {
    const matches =
      text.length > 0 &&
      airports.filter((airport) => {
        const regex = new RegExp(`${text}`, "gi");
        return airport.city.match(regex);
      });
    setSuggestions(matches || []);
  };

  const searchFlight = () => {
    if (searchInputs.origin === searchInputs.destination) {
      alert("You can't choose the same city");
      return;
    }

    const systemTickets = (a, b, date) =>
      flightsSchedule.filter((flight) => {
        return (
          flight.origin.toLowerCase() === b.toLowerCase() &&
          flight.destination.toLowerCase() === a.toLowerCase() &&
          flight.date === date
        );
      });
    setTimeout(() => {
      const systemOneWayTickets = systemTickets(
        searchInputs.origin,
        searchInputs.destination,
        searchInputs.departureDate
      );
      // systemOneWayTickets.filter((flight) => {
      //   flight.date ;
      // });

      const systemRoundTripTickets = systemTickets(
        searchInputs.destination,
        searchInputs.origin,
        searchInputs.departureDate
      );

      setOneWayTickets(systemOneWayTickets);
      setRoundTripTickets(systemRoundTripTickets);
    }, 3000);
    console.log(1);

    // setSearchInputs({ departureDate: m });
    console.log(2);
  };
  const m = moment(searchInputs.departureDate, "YYYY-DD-MM").format("L");

  console.log(searchInputs.departureDate);

  const isValid =
    searchInputs.origin !== "" &&
    searchInputs.destination !== "" &&
    searchInputs.departureDate !== "" &&
    (searchInputs.returnDate !== "" || radio === "oneWay");

  return (
    <>
      <div className={styles.bookingContainer}>
        <FlightType setRadio={setRadio} radio={radio} />
        <form
          className={styles.flightForm}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className={styles.formInputs}>
            <input
              type="text"
              placeholder="Origin "
              onChange={(e) => {
                setSuggestionsWrapper(e.target.value, setSuggestionsOrigin);
                setSearchInputs({ origin: e.target.value });
              }}
              value={searchInputs.origin}
            />
            {suggestionsOrigin.length > 0 ? (
              <div className={styles.suggestionorigin}>
                {suggestionsOrigin &&
                  suggestionsOrigin.map((suggestion, i) => {
                    return (
                      <div
                        key={i}
                        onClick={(e) => {
                          setSuggestionsWrapper([], setSuggestionsOrigin);
                          setSearchInputs({ origin: e.target.innerHTML });
                        }}
                      >
                        {suggestion.city}
                      </div>
                    );
                  })}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className={styles.formInputs}>
            <input
              type="text"
              placeholder="Destination "
              onChange={(e) => {
                setSuggestionsWrapper(
                  e.target.value,
                  setSuggestionsDestination
                );
                setSearchInputs({ destination: e.target.value });
              }}
              value={searchInputs.destination}
            />
            {suggestionsDestination.length > 0 ? (
              <div className={styles.suggestiondestination}>
                {suggestionsDestination &&
                  suggestionsDestination.map((suggestion, i) => {
                    return (
                      <div
                        key={i}
                        onClick={(e) => {
                          setSearchInputs({ destination: e.target.innerHTML });
                          setSuggestionsWrapper([], setSuggestionsDestination);
                        }}
                      >
                        {suggestion.city}
                      </div>
                    );
                  })}
              </div>
            ) : (
              ""
            )}
          </div>

          <>
            <div className={styles.formInputs}>
              <DatePicker
                placeholderText="Departure"
                selected={searchInputs.departureDate}
                onChange={handleChange}
                // dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                // maxDate={searchInputs.returnDate}
              ></DatePicker>
            </div>
            {radio === "roundTrip" && (
              <div className={styles.formInputs}>
                <DatePicker
                  placeholderText="Return"
                  selected={searchInputs.returnDate}
                  onChange={(date) => setSearchInputs({ returnDate: date })}
                  // dateFormat="dd/MM/yyyy"
                  minDate={
                    searchInputs.departureDate !== ""
                      ? searchInputs.departureDate
                      : new Date()
                  }
                ></DatePicker>
              </div>
            )}
          </>
          <div className={styles.formInputs}>
            <input
              placeholder="Passengers"
              type="number"
              value={searchInputs.passengers}
              min={1}
              onChange={(e) => setSearchInputs({ passengers: e.target.value })}
            />
          </div>
          <div
            className={
              !isValid
                ? styles.formInputsSearchDisable
                : styles.formInputsSearch
            }
          >
            <Link
              to="/flightsResult"
              className={isValid ? styles.buttonActive : styles.buttonDisable}
              onClick={searchFlight}
            >
              Search Flight
            </Link>
          </div>
        </form>
        <div className={styles.searchflight}></div>
      </div>
    </>
  );
};

export default SearchBar;
