import React from "react";
import {timestampClockTime,msToTime} from '../../Utils/time'

import styles from "./RoundTripFlight.module.css";
const RoundTripFlight = ({flight}) => {
  if(!Array.isArray(flight)){
    return null
  }
  
  const [originFlight, returnFlight] = flight
    console.log(originFlight,returnFlight);
  

  return (
        <section className={styles.ticketRoundTrip}>
          <section className={styles.left}>
            <article className={styles.roundTripTicketsContainer}>
              <article className={styles.ticketFlightDetailsRoundTrip}>
                <div className={styles.airlineRoundTrip}>
                  <img src="" alt="ElAl logo" />
                  <h5>{originFlight.airline}</h5>
                </div>
                <div className={styles.departureRoundTrip}>
                  <h5>{timestampClockTime(originFlight.departure)}</h5>
                  <h4>{originFlight.originCode}</h4>
                </div>
                <div className={styles.FlightDurationRoundTrip}>
                  <h5>{msToTime(originFlight.flightDuration)}</h5>
                  <hr />
                  <h5>{originFlight.stops}</h5>
                </div>
                <div className={styles.arrivalRoundTrip}>
                  <h5>{timestampClockTime(originFlight.arrival)}</h5>
                  <h4>{originFlight.destinationCode}</h4>
                </div>
              </article>
            </article>
            <article className={styles.roundTripTicketsContainer}>
              <article className={styles.ticketFlightDetailsRoundTrip}>
                <div className={styles.airlineRoundTrip}>
                  <img src="" alt="ElAl logo" />
                  <h4>{returnFlight.airline}</h4>
                </div>
                <div className={styles.departureRoundTrip}>
                  <h5>{timestampClockTime(returnFlight.departure)}</h5>
                  <h4>{returnFlight.originCode}</h4>
                </div>
                <div className={styles.FlightDurationRoundTrip}>
                  <h5>{msToTime(returnFlight.flightDuration)}</h5>
                  <hr />
                  <h5>{returnFlight.stops}</h5>
                </div>
                <div className={styles.arrivalRoundTrip}>
                  <h5>{timestampClockTime(returnFlight.arrival)}</h5>
                  <h4>{returnFlight.destinationCode}</h4>
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
                <h1>${originFlight.price + returnFlight.price}</h1>
              </div>
              <div className={styles.selectBtnRoundTrip}>
                <button>Select</button>
              </div>
            </article>
          </section>
        </section>
  );
};

export default RoundTripFlight;
