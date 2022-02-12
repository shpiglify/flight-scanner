import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../ProviderWrapper/ProviderWrapper";

import styles from "./RoundTripTickets.module.css";
const RoundTripTickets = ( ) => {

  return (
    <div className={styles.resultsForRoudTrip}>
      <div className={styles.destination}></div>
      <div className={styles.results}>
        <section className={styles.ticketRoundTrip}>
          <section className={styles.left}>
            <article className={styles.roundTripTicketsContainer}>
              <article className={styles.ticketFlightDetailsRoundTrip}>
                <div className={styles.airlineRoundTrip}>
                  <img src="" alt="ElAl logo" />
                  <h5>El-Al</h5>
                </div>
                <div className={styles.departureRoundTrip}>
                  <h5>06:15</h5>
                  <h4>TLV</h4>
                </div>
                <div className={styles.FlightDurationRoundTrip}>
                  <h5>5h 10m</h5>
                  <hr />
                  <h5>non-stop</h5>
                </div>
                <div className={styles.arrivalRoundTrip}>
                  <h5>10:25</h5>
                  <h4>AMS</h4>
                </div>
              </article>
            </article>
            <article className={styles.roundTripTicketsContainer}>
              <article className={styles.ticketFlightDetailsRoundTrip}>
                <div className={styles.airlineRoundTrip}>
                  <img src="" alt="ElAl logo" />
                  <h4>ElAL</h4>
                </div>
                <div className={styles.departureRoundTrip}>
                  <h5>06:15</h5>
                  <h4>TLV</h4>
                </div>
                <div className={styles.FlightDurationRoundTrip}>
                  <h5>5h 10m</h5>
                  <hr />
                  <h5>non-stop</h5>
                </div>
                <div className={styles.arrivalRoundTrip}>
                  <h5>10:25</h5>
                  <h4>AMS</h4>
                </div>
              </article>
            </article>
          </section>
          <section className={styles.right}>
            <article className={styles.lineSparateRoundTrip}>
              <div className={styles.topDotRoundTrip}></div>
              <div className={styles.lineRoundTrip}></div>
              <div className={styles.bottomDotRoundTrip}></div>
            </article>
            <article className={styles.ticketPriceRoundTrip}>
              <div className={styles.flightPriceRoundTrip}>
                <h1>$392</h1>
              </div>
              <div className={styles.selectBtnRoundTrip}>
                <button>Select</button>
              </div>
            </article>
          </section>
        </section>
      </div>
    </div>
  );
};

export default RoundTripTickets;
