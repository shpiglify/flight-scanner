import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../ProviderWrapper/ProviderWrapper";

import styles from "./OneWayTickets.module.css";

function OneWayTickets({ setUserSelectionForOneWay }) {
  const { oneWayTickets } = useContext(AppContext);

  const passTicketToBooking = (oneWayTicketId) => {
    const oneWayTicketForBooking = [];
    const foundOneWayTicket = oneWayTickets.find((ticket) => {
      return oneWayTicketId === ticket.id;
    });
    oneWayTicketForBooking.push(foundOneWayTicket);
    setUserSelectionForOneWay(oneWayTicketForBooking);
  };

  const oneWayElements = oneWayTickets
    ? oneWayTickets.map((ticket, i) => (
        <div className={styles.OneWayticket} key={i}>
          <section className={styles.OneWayflightDetails}>
            <div className={styles.OneWayticketOne}>
              <div className={styles.flightNum}>
                <h4>{ticket.flightNumber}</h4>
                <div className={styles.airlineLogo}>
                  <img src={ticket.airlineLogo} />
                </div>
              </div>
              <div className={styles.depArvTime}>
                <h4>
                  {ticket.departure} - {ticket.arrival}
                </h4>
              </div>
              <div className={styles.fromTo}>
                <h4>{ticket.origin}</h4>
                <h4>{ticket.destination}</h4>
              </div>
              <div className={styles.total}>
                <h4>{ticket.terminal}</h4>
                <h4>{ticket.FlightDuration}</h4>
              </div>
            </div>
          </section>
          <section className={styles.OneWayflightPrice}>
            <div className={styles.icon}>
              <span>icon</span>
            </div>
            <div className={styles.price}>
              <span>400$</span>
            </div>
            <div className={styles.button}>
              <Link
                to="/booking"
                onClick={() => {
                  passTicketToBooking(ticket.id);
                }}
              >
                Select
              </Link>
            </div>
          </section>
        </div>
      ))
    : null;

  return (
    <>
      <div className={styles.resultsForOneWay}>
        <div className={styles.destination}></div>
        <div className={styles.results}>{oneWayElements}</div>
      </div>
    </>
  );
}

export default OneWayTickets;
