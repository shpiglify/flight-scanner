import React from "react";
import {msToTime, timestampClockTime} from '../../Utils/time'

import styles from "./Flight.module.css";

const Flight = ({flight}) => {

  const {departure,arrival,airlineLogo,airline,destinationCode,originCode,price,stops,flightDuration} = flight
  console.log(timestampClockTime(departure), timestampClockTime(arrival))

  return (
        <div className={styles.destination}>
          <section className={styles.OneWayticket}>
            <article className={styles.ticketFlightDetails}>
              <div className={styles.airline}>
                <img src={airlineLogo} alt="airline logo" />
                <h4>{airline}</h4>
              </div>
              <div className={styles.departure}>
                <h5>{timestampClockTime(departure)}</h5>
                <h4>{originCode}</h4>
              </div>
              <div className={styles.FlightDuration}>
                <h5>{msToTime(flightDuration)}</h5>
                <hr />
                <h5>{stops}</h5>
              </div>
              <div className={styles.arrival}>
                <h5>{timestampClockTime(arrival)}</h5>
                <h4>{destinationCode}</h4>
              </div>
            </article>
            <article className={styles.lineSparate}>
              <div className={styles.topDot}></div>
              <div className={styles.line}></div>
              <div className={styles.bottomDot}></div>
            </article>
            <article className={styles.ticketPrice}>
              <div className={styles.flightPrice}>
                <h1>${price}</h1>
              </div>
              <div className={styles.selectBtn}>
                <button>Select</button>
              </div>
            </article>
          </section>
        </div>
  );
}

export default Flight;