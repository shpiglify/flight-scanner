import React, { useContext } from "react";
import { AppContext } from "../../ProviderWrapper/ProviderWrapper";

import styles from "./BookingTicket.module.css";

function BookingTicket({ userSelectionForRoundTrip, userSelectionForOneWay }) {
  const { radio } = useContext(AppContext);

  const bookingFlightDetails =
    radio === "roundTrip"
      ? userSelectionForRoundTrip.map((ticket) => {
          return (
            <>
              <div className={styles.flightDetailsHeading}></div>
              <article className={styles.bookingFlightDetails}>
                <section className={styles.ticket} key={ticket.id}>
                  <div className={styles.flightBrand}>
                    <h3>{ticket.flightNumber}</h3>
                  </div>
                  <div className={styles.flightTime}>
                    <ul>
                      <li>
                        <h4>{ticket.departure}</h4>
                        <h5>{ticket.originCode}</h5>
                        <span>{ticket.origin}</span>
                      </li>
                      <li>
                        <h4>{ticket.arrival}</h4>
                        <h5>{ticket.destinationCode}</h5>
                        <span>{ticket.destination}</span>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.cabin}></div>
                </section>
              </article>
            </>
          );
        })
      : userSelectionForOneWay.map((ticket) => {
          return (
            <>
              <div className={styles.flightDetailsHeading}></div>
              <article className={styles.bookingFlightDetails}>
                <section className={styles.ticket} key={ticket.id}>
                  <div className={styles.flightBrand}>
                    <h3>{ticket.flightNumber}</h3>
                  </div>
                  <div className={styles.flightTime}>
                    <ul>
                      <li>
                        <h4>{ticket.departure}</h4>
                        <h5>{ticket.originCode}</h5>
                        <span>{ticket.origin}</span>
                      </li>
                      <li>
                        <h4>{ticket.arrival}</h4>
                        <h5>{ticket.destinationCode}</h5>
                        <span>{ticket.destination}</span>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.cabin}></div>
                </section>
              </article>
            </>
          );
        });
  return (
    <>
      <div className={styles.currentFlight}>
        <h3>Flight Details</h3>
        {bookingFlightDetails}
      </div>
    </>
  );
}

export default BookingTicket;
