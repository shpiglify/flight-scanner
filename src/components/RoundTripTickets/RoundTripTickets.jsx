import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../ProviderWrapper/ProviderWrapper";

import styles from "./RoundTripTickets.module.css";
const RoundTripTickets = ({ setUserSelectionForRoundTrip }) => {
  const { oneWayTickets, roundTripTickets } = useContext(AppContext);

  const passTicketToBooking = (oneWayTicketId, roundTripTicketId) => {
    const roundTripTicketForBooking = [];
    const foundOneWayTicket = oneWayTickets.find((ticket) => {
      return oneWayTicketId === ticket.id;
    });
    const foundRoundTripTicket = roundTripTickets.find((ticket) => {
      return roundTripTicketId === ticket.id;
    });
    roundTripTicketForBooking.push(foundOneWayTicket);
    roundTripTicketForBooking.push(foundRoundTripTicket);
    setUserSelectionForRoundTrip(roundTripTicketForBooking);
  };

  const secondTicket = Object.values(roundTripTickets);
  const roundTripElements = oneWayTickets
    ? oneWayTickets.map((ticket, i) => {
        return (
          <>
            <div className={styles.roudTripticket} key={ticket.id}>
              <div className={styles.roundTicketTripDataContainer}>
                <section className={styles.roundTicketTripflightDetails}>
                  <div className={styles.roundTicketTripInnerContainer}>
                    <div className="flight num">
                      <h4>{ticket.flightNumber}</h4>
                      <h5>Departure</h5>
                      <h5>{ticket.date}</h5>
                    </div>
                    <div className="depArvTime">
                      <h4>
                        {ticket.departure} - {ticket.arrival}
                      </h4>
                    </div>
                    <div className="fromTo">
                      <h4>{ticket.destination}</h4>
                      <h4>{ticket.origin}</h4>
                    </div>
                    <div className="total">
                      <h4>{ticket.terminal}</h4>
                    </div>
                  </div>
                </section>
                {secondTicket && (
                  <section
                    className={styles.roundTicketTripflightDetails}
                    key={secondTicket[i].id}
                  >
                    <div className={styles.roundTicketTripInnerContainer}>
                      <div className="flightnum">
                        <h4>{secondTicket[i].flightNumber}</h4>
                        <h5>Departure</h5>
                        <h5>{secondTicket[i].date}</h5>
                      </div>
                      <div className="depArvTime">
                        <h4>
                          {secondTicket[i].departure} -{" "}
                          {secondTicket[i].arrival}
                        </h4>
                      </div>
                      <div className="fromTo">
                        <h4>{secondTicket[i].destination}</h4>
                        <h4>{secondTicket[i].origin}</h4>
                      </div>
                      <div className="total">
                        <h4>{secondTicket[i].terminal}</h4>
                      </div>
                    </div>
                  </section>
                )}
              </div>
              <section className={styles.roundTicketTripFlightPrice}>
                <div className="icon">
                  <span></span>
                </div>
                <div className="price">
                  <span>{"$" + ticket.price * 3}</span>
                </div>
                <div className="button">
                  <Link
                    to="/booking"
                    onClick={() => {
                      passTicketToBooking(ticket.id, secondTicket[i].id);
                    }}
                  >
                    Select
                  </Link>
                </div>
              </section>
            </div>
          </>
        );
      })
    : null;

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
